const NetworkStatus = ({ networkInfo }) => {
    if (!networkInfo) return null;
  
    return (
      <div className="px-4 py-2">
        <div className="flex items-center">
          <div className={`w-2 h-2 rounded-full mr-2 ${
            networkInfo.isPolygon ? 'bg-green-500' : 'bg-red-500'
          }`}></div>
          <span className="text-sm text-gray-600">
            {networkInfo.networkName}
          </span>
        </div>
      </div>
    );
  };
  
  export default NetworkStatus;