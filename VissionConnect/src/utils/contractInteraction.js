import { ethers } from 'ethers';
import { CONTRACT_ADDRESS, CONTRACT_ABI, ADMIN_PRIVATE_KEY, POLYGON_RPC_URL } from './contractConfig';

const getAdminContract = () => {
  const provider = new ethers.JsonRpcProvider(POLYGON_RPC_URL);
  const adminWallet = new ethers.Wallet(ADMIN_PRIVATE_KEY, provider);
  return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, adminWallet);
};

const getReadOnlyContract = () => {
  const provider = new ethers.JsonRpcProvider(POLYGON_RPC_URL);
  return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
};

export const mapStringToPublicKey = async (message, userAddress) => {
  const contract = getAdminContract();
  
  try {
    const tx = await contract.mapStringToPublicKey(message, userAddress);
    await tx.wait();
    return tx.hash;
  } catch (error) {
    throw new Error(`Failed to map string to public key: ${error.message}`);
  }
};

export const getMessageHash = async (message) => {
  const contract = getReadOnlyContract();
  try {
    const hash = await contract.getMessageHash(message);
    return hash;
  } catch (error) {
    throw new Error(`Failed to get message hash: ${error.message}`);
  }
};