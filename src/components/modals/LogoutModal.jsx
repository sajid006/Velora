export const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-80">
          <h2 className="text-xl font-bold mb-4">Confirm Logout</h2>
          <p className="text-sm text-gray-500 mb-6">Are you sure you want to log out?</p>
          <div className="flex justify-end gap-4">
            <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded-lg">Cancel</button>
            <button onClick={onConfirm} className="px-4 py-2 bg-red-500 text-white rounded-lg">Logout</button>
          </div>
        </div>
      </div>
    );
  };