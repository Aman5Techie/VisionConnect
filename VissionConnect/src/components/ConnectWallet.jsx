const ConnectWallet = ({ onConnect }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Welcome to Polygon DApp</h2>
        <p className="text-gray-600 text-center mb-4">
          Connect your MetaMask wallet to continue
        </p>
        <p className="text-sm text-gray-500 text-center mb-8">
          Make sure you have MetaMask installed and are connected to the Polygon network
        </p>
        <button
          onClick={onConnect}
          className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Connect MetaMask
        </button>
      </div>
    </div>
  );
};

export default ConnectWallet;