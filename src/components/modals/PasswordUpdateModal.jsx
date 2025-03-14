import React from 'react';

const PasswordUpdateModal = ({
  isModalOpen,
  closeModal,
  oldPassword,
  setOldPassword,
  newPassword,
  setNewPassword,
  handlePasswordUpdate
}) => {
  if (!isModalOpen) return null; // Don't render modal if it's not open

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Update Password</h2>
        <div className="mb-4">
          <label htmlFor="old-password" className="block text-gray-700">Old Password</label>
          <input
            type="password"
            id="old-password"
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Enter your old password"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="new-password" className="block text-gray-700">New Password</label>
          <input
            type="password"
            id="new-password"
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter your new password"
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={closeModal}
            className="py-2 px-4 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handlePasswordUpdate}
            className="py-2 px-4 bg-blue-500 border-none text-white rounded-lg hover:bg-blue-600"
          >
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordUpdateModal;
