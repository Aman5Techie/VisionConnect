import { useState } from 'react';
import { signMessage } from '../utils/web3';

const SignMessage = ({ account }) => {
  const [message, setMessage] = useState('');
  const [signature, setSignature] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSign = async () => {
    if (!message) {
      setError('Please enter a message to sign');
      return;
    }

    try {
      setError('');
      setLoading(true);
      const sig = await signMessage(message, account);
      setSignature(sig);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Sign Message</h3>
      
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Enter Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows="3"
          placeholder="Enter a message to sign..."
        />
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
          {error}
        </div>
      )}

      <button
        onClick={handleSign}
        disabled={loading || !message}
        className={`w-full py-2 px-4 rounded-md text-white font-medium ${
          loading || !message
            ? 'bg-purple-400 cursor-not-allowed'
            : 'bg-purple-600 hover:bg-purple-700'
        }`}
      >
        {loading ? 'Signing...' : 'Sign Message'}
      </button>

      {signature && (
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Digital Signature:</h4>
          <div className="p-3 bg-gray-100 rounded-md">
            <p className="text-sm font-mono break-all">{signature}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignMessage;