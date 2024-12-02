import { useState, useEffect } from 'react';
import Header from './components/Header';
import ConnectWallet from './components/ConnectWallet';
import SignMessage from './components/SignMessage';
import { connectWallet, handleAccountsChanged, getNetworkInfo } from './utils/web3';
import './App.css';

function App() {
  const [account, setAccount] = useState(null);
  const [error, setError] = useState('');
  const [networkInfo, setNetworkInfo] = useState(null);

  useEffect(() => {
    const updateNetworkInfo = async () => {
      const info = await getNetworkInfo();
      setNetworkInfo(info);
    };

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        const newAccount = handleAccountsChanged(accounts);
        setAccount(newAccount);
      });

      window.ethereum.on('chainChanged', () => {
        updateNetworkInfo();
      });

      if (account) {
        updateNetworkInfo();
      }
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', updateNetworkInfo);
      }
    };
  }, [account]);

  const handleConnect = async () => {
    try {
      setError('');
      const account = await connectWallet();
      setAccount(account);
      const info = await getNetworkInfo();
      setNetworkInfo(info);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header account={account} networkInfo={networkInfo} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}
        {!account ? (
          <ConnectWallet onConnect={handleConnect} />
        ) : (
          <div className="py-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Welcome to the Polygon DApp!
            </h2>
            <div className="max-w-2xl mx-auto">
              <SignMessage account={account} />
            </div>
          </div>
        )}
      </main>
    </div>
  );

}

export default App;