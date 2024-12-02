export const CONTRACT_ADDRESS = '0x26b989b9525Bb775C8DEDf70FeE40C36B397CE67';
export const ADMIN_PRIVATE_KEY = '0xa65168464651654165468468';
export const POLYGON_RPC_URL = 'https://polygon-rpc.com';

export const CONTRACT_ABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_message",
        "type": "string"
      }
    ],
    "name": "getMessageHash",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_message",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "_publicKey",
        "type": "address"
      }
    ],
    "name": "mapStringToPublicKey",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_messageHash",
        "type": "bytes32"
      }
    ],
    "name": "getEthSignedMessageHash",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  }
];