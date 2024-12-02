import { useState } from 'react';
import UserMenu from './UserMenu';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const Header = ({ account, networkInfo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Polygon DApp</h1>
          {account && (
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
              >
                <UserCircleIcon className="h-8 w-8" />
              </button>
              {isMenuOpen && (
                <UserMenu 
                  account={account} 
                  networkInfo={networkInfo}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;