// Sidebar.js
import { FiHome, FiFile, FiList, FiUsers, FiLogOut } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-200 p-4">
      <nav>
        <ul>
          <li className="mb-2">
            <a href="#" className="flex items-center text-gray-700 hover:text-blue-500">
              <FiHome className="mr-2" /> Sale Report
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center text-gray-700 hover:text-blue-500">
              <FiFile className="mr-2" /> Order Form
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center text-gray-700 hover:text-blue-500">
              <FiList className="mr-2" /> Order Lists
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center text-gray-700 font-bold">
              <FiUsers className="mr-2" /> Customers
            </a>
          </li>
          <li className="mt-8">
            <a href="#" className="flex items-center text-red-500 hover:text-red-700">
              <FiLogOut className="mr-2" /> Log Out
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;