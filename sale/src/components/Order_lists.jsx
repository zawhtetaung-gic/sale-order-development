import React from "react";
import { RiSearchLine } from "react-icons/ri"; // Search icon
import { IoMdCalendar } from "react-icons/io"; // Calendar icon

const OrderList = () => {
  const orders = [
    {
      customer: "Aung Aung",
      phoneNumber: "09-123456789",
      address: "73st, 107st * 108st, MIIT",
      orderDate: "DD-MM-YYYY",
      totalAmount: "35,000",
      status: "confirm",
    },
    {
      customer: "Aye Aye",
      phoneNumber: "09-987654321",
      address: "109st, 66st * 67st, Saint Saint store",
      orderDate: "DD-MM-YYYY",
      totalAmount: "1,000,000",
      status: "draft",
    },
    {
      customer: "Aung Aung",
      phoneNumber: "09-123456789",
      address: "73st, 107st * 108st, MIIT",
      orderDate: "DD-MM-YYYY",
      totalAmount: "500,000",
      status: "bill",
    },
    {
      customer: "Aung Aung",
      phoneNumber: "09-123456789",
      address: "73st, 107st * 108st, MIIT",
      orderDate: "DD-MM-YYYY",
      totalAmount: "500,000",
      status: "delivered",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Header */}
      <h1 className="text-center text-2xl font-bold mb-4">Order Lists</h1>

      {/* Filter Bar */}
      <div className="flex justify-between items-center mb-4">
        {/* Search Customer */}
        <div className="w-1/4">
          <input
            type="text"
            placeholder="Search Customer"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Filter by Month */}
        <div className="flex gap-4 w-1/2">
          <div className="flex items-center bg-white rounded-lg shadow-sm">
            <span className="px-3 text-gray-500">From</span>
            <input
              type="date"
              className="w-full px-3 py-2 border-l border-r-0 rounded-l-none rounded-r-lg focus:outline-none"
            />
          </div>
          <div className="flex items-center bg-white rounded-lg shadow-sm">
            <span className="px-3 text-gray-500">To</span>
            <input
              type="date"
              className="w-full px-3 py-2 border-l border-r-0 rounded-l-none rounded-r-lg focus:outline-none"
            />
          </div>
        </div>

        {/* Filter by Status */}
        <div className="w-1/4">
          <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
            <option value="">Filter by status</option>
            <option value="confirm">Confirm</option>
            <option value="draft">Draft</option>
            <option value="bill">Bill</option>
            <option value="delivered">Delivered</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Customer
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Phone Number
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Address
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Order Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Total Amount
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Action
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order, index) => (
              <OrderRow key={index} order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const OrderRow = ({ order }) => {
  const statusColors = {
    confirm: "bg-green-100 text-green-600",
    draft: "bg-gray-100 text-gray-600",
    bill: "bg-blue-100 text-blue-600",
    delivered: "bg-yellow-100 text-yellow-600",
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{order.customer}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{order.phoneNumber}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{order.address}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{order.orderDate}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{order.totalAmount}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <button className="px-4 py-2 bg-white text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100">
          Details
        </button>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-4 py-2 rounded-md text-sm font-medium ${statusColors[order.status]}`}
        >
          {order.status}
        </span>
      </td>
    </tr>
  );
};

export default OrderList;