import React from 'react';

const NameUpdateModal = ({
  isModalOpen,
  closeModal,
  newName,
  setNewName,
  currentPassword,
  setCurrentPassword,
  handleNameUpdate
}) => {
  if (!isModalOpen) return null; // Don't render modal if it's not open

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Update Name</h2>
        <div className="mb-4">
          <label htmlFor="new-name" className="block text-gray-700">New Name</label>
          <input
            type="text"
            id="new-name"
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Enter your new name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="current-password" className="block text-gray-700">Current Password</label>
          <input
            type="password"
            id="current-password"
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Enter your current password"
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
            onClick={handleNameUpdate}
            className="py-2 px-4 bg-blue-500 border-none text-white rounded-lg hover:bg-blue-600"
          >
            Update Name
          </button>
        </div>
      </div>
    </div>
  );
};

export default NameUpdateModal;
