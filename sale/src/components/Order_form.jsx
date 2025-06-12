import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiCalendar, FiSearch } from "react-icons/fi";
import "./styles/Order_form.css";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    orderNo: "",
    orderDate: null,
    deliveryDate: null,
    customerName: "",
    email: "",
    address: "",
    phoneNo: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (fieldName, date) => {
    setFormData({ ...formData, [fieldName]: date });
  };

  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-bold mb-4">Order Form</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* Order No */}
        <div>
          <label htmlFor="orderNo" className="block mb-2">
            Order No
          </label>
          <input
            type="text"
            id="orderNo"
            name="orderNo"
            value={formData.orderNo}
            onChange={handleChange}
            placeholder="ID number"
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>

        {/* Order Date */}
        <div>
          <label htmlFor="orderDate" className="block mb-2">
            Order Date
          </label>
          <div className="relative">
            <DatePicker
              selected={formData.orderDate}
              onChange={(date) => handleDateChange("orderDate", date)}
              className="w-full px-4 py-2 pr-12 border rounded bg-gray-100 custom-datepicker"
              placeholderText="Select a date"
              id="orderDate"
            />
            <FiCalendar className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>

        {/* Delivery Date */}
        <div>
          <label htmlFor="deliveryDate" className="block mb-2">
            Delivery Date
          </label>
          <div className="relative">
            <DatePicker
              selected={formData.deliveryDate}
              onChange={(date) => handleDateChange("deliveryDate", date)}
              className="w-full px-4 py-2 pr-12 border rounded bg-gray-100 custom-datepicker"
              placeholderText="Select a date"
              id="deliveryDate"
            />
            <FiCalendar className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Customer Name and Email */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="customerName" className="block mb-2">
            Customer Name
          </label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
      </div>

      {/* Address and Phone Number */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="address" className="block mb-2">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="phoneNo" className="block mb-2">
            Phone No
          </label>
          <input
            type="tel"
            id="phoneNo"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            placeholder="Phone number"
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
      </div>

      {/* Comment */}
      <div className="mt-4">
        <label htmlFor="comment" className="block mb-2">
          Comment
        </label>
        <textarea
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="Comment"
          className="w-full p-2 border rounded h-24 resize-none bg-gray-100"
        ></textarea>
      </div>

      {/* Product Table */}
      <div className="mt-8">
        <div className="flex justify-between mb-4">
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Search Product"
              className="w-full p-2 border rounded pr-10 bg-gray-100"
            />
            <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>

          <select className="p-2 border rounded bg-gray-100">
            <option>Category</option>
          </select>
        </div>
        <table className="w-full border-collapse border border-black">
          <thead>
            <tr>
              <th className="border border-black p-2">Product ID</th>
              <th className="border border-black p-2">Product Name</th>
              <th className="border border-black p-2">Warehouse Location</th>
              <th className="border border-black p-2">Unit Price(Ks)</th>
              <th className="border border-black p-2">Qty</th>
              <th className="border border-black p-2">Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-2">1</td>
              <td className="border border-black p-2">Water (1L)</td>
              <td className="border border-black p-2">
                <select className="w-full p-2 border rounded bg-gray-100">
                  <option>Warehouse-B</option>
                  <option>Warehouse-A</option>
                  <option>Warehouse-C</option>
                  <option>Warehouse-D</option>
                </select>
              </td>
              <td className="border border-black p-2">3000</td>
              <td className="border border-black p-2">
                <span className="inline-block mr-2">+10</span>
                <span>-</span>
              </td>
              <td className="border border-black p-2">30000</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2 order-confirm">
          Order Confirm
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded order-cancel">
          Order Cancel
        </button>
      </div>
    </div>
  );
};

export default OrderForm;
