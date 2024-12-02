import NetworkStatus from './NetworkStatus';

const UserMenu = ({ account, networkInfo }) => {
  return (
    <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg py-1 z-10 border">
      <div className="px-4 py-3">
        <p className="text-sm font-medium text-gray-900">Connected Account</p>
        <p className="text-sm text-gray-500 truncate">{account}</p>
      </div>
      <div className="border-t border-gray-100">
        <NetworkStatus networkInfo={networkInfo} />
      </div>
      <div className="border-t border-gray-100 px-4 py-2">
        <a
          href={`https://polygonscan.com/address/${account}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          View on PolygonScan
        </a>
      </div>
    </div>
  );
};

export default UserMenu;