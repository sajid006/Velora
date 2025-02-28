import React from 'react';

const AccountDeleteModal = ({
  isModalOpen,
  closeModal,
  username,
  setUsername,
  password,
  setPassword,
  handleAccountDelete
}) => {
  if (!isModalOpen) return null; // Don't render modal if it's not open

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Delete Account</h2>
        <p className="text-gray-700 mb-4">
          Deleting your account will delete all purchase history and reviews. This action cannot be undone.
        </p>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={closeModal}
            className="py-2 px-4 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleAccountDelete}
            className="py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            I understand and I wish to proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountDeleteModal;
