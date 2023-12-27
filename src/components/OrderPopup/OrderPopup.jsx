import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import PropTypes from "prop-types";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setError("Please enter both username and password.");
      return;
    }
    console.log("Form login submitted:", formData);
    setFormData({
      username: "",
      password: "",
    });
    setOrderPopup(false);
  };

  const handleClose = () => {
    setFormData({
      username: "",
      password: "",
    });
    setError("");
    setOrderPopup(false);
  };

  return (
    <>
      {orderPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="bg-black bg-opacity-50 absolute inset-0"></div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 max-w-xs w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                Login
              </h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                onClick={handleClose}
              />
            </div>
            {/* Body */}
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mb-4">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Username"
                  className="rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-4 py-2 focus:outline-none focus:border-red-500 dark:focus:border-red-500"
                  required
                />
              </div>
              <div className="flex flex-col mb-4">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-4 py-2 focus:outline-none focus:border-red-500 dark:focus:border-red-500"
                  required
                />
              </div>
              {/* Display error message if any */}
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <div className="flex justify-center">
                <button className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary hover:scale-105 duration-200 text-white py-2 px-6 rounded-full">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

OrderPopup.propTypes = {
  orderPopup: PropTypes.bool.isRequired,
  setOrderPopup: PropTypes.func.isRequired,
};

export default OrderPopup;
