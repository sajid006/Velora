import React, { useState, useEffect } from "react";
import EmailUpdateModal from "./modals/EmailUpdateModal";
import NameUpdateModal from "./modals/NameUpdateModal";
import PasswordUpdateModal from "./modals/PasswordUpdateModal";
import AccountDeleteModal from "./modals/AccountDeleteModal";
import { useSelector } from "react-redux";
import axios from "axios";
import { apiUrl } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isNameModalOpen, setIsNameModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isAccountDeleteModalOpen, setIsAccountDeleteModalOpen] =
    useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newName, setNewName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [accountUsername, setAccountUsername] = useState("");
  const [accountPassword, setAccountPassword] = useState("");

  const currentUser = useSelector((state) => state.auth.currentUser);
  const navigate = useNavigate();


  const openEmailModal = () => {
    setIsEmailModalOpen(true);
  };

  const closeEmailModal = () => {
    setIsEmailModalOpen(false);
    setNewEmail("");
    setCurrentPassword("");
  };

  const openNameModal = () => {
    setIsNameModalOpen(true);
  };

  const closeNameModal = () => {
    setIsNameModalOpen(false);
    setNewName("");
    setCurrentPassword("");
  };


  const openPasswordModal = () => {
    setIsPasswordModalOpen(true);
  };

  const closePasswordModal = () => {
    setIsPasswordModalOpen(false);
    setOldPassword("");
    setNewPassword("");
  };

  const openAccountDeleteModal = () => {
    setIsAccountDeleteModalOpen(true);
  };

  const closeAccountDeleteModal = () => {
    setIsAccountDeleteModalOpen(false);
    setAccountUsername("");
    setAccountPassword("");
  };

  const handleEmailUpdate = async () => {
    if (newEmail && currentPassword) {
        try {
            const config = { withCredentials: true };
            const updateInfo = await axios.put(`${apiUrl}/users/${username}`, {email: newEmail, password: currentPassword}, config);
            console.log(updateInfo);
            if(updateInfo.status === 200){
                setEmail(newEmail);
                closeEmailModal();
                alert("Email updated successfully!");
            } else {
                alert("Incorrect password.");
            }
        } catch (error) {
            console.error('Error updating email:', error);
            alert('Error updating email');
        }

    } else {
      alert("Please fill in both fields.");
    }
  };

  const handleNameUpdate = async () => {
    if (newName && currentPassword) {
        try {
            const config = { withCredentials: true };
            const updateInfo = await axios.put(`${apiUrl}/users/${username}`, {name: newName, password: currentPassword}, config);
            console.log(updateInfo);
            if(updateInfo.status === 200){
                setName(newName);
                closeNameModal();
                alert("Name updated successfully!");
            } else {
                alert("Incorrect password.");
            }
        } catch (error) {
            console.error('Error updating name:', error);
            alert('Error updating name');
        }
    } else {
      alert("Please fill in both fields.");
    }
  };

  const handlePasswordUpdate = async () => {
    if (oldPassword && newPassword) {
        if(newPassword.length < 8){
            alert("Password must be at least 8 characters long.");
            return;
        }
        try {
            const config = { withCredentials: true };
            const updateInfo = await axios.put(`${apiUrl}/users/${username}/password`, {oldPassword, newPassword}, config);
            console.log(updateInfo);
            if(updateInfo.status === 200){
                closePasswordModal();
                alert("Password updated successfully!");
            } else {
                alert("Incorrect password.");
            }
        } catch (error) {
            console.error('Error updating password:', error);
            alert('Error updating password');
        }
    } else {
      alert("Please fill in both fields.");
    }
  };

  const handleAccountDelete = async () => {
    if (accountUsername === username && accountPassword) {
        try {
            const config = { withCredentials: true };
            const updateInfo = await axios.delete(`${apiUrl}/users/${username}`, {data: {password: accountPassword}}, config);
            console.log(updateInfo);
            if(updateInfo.status === 204){
                alert("Account deleted successfully!");
                closeAccountDeleteModal();
                navigate('/login');
            } else {
                alert("Incorrect password.");
            }
        } catch (error) {
            console.error('Error deleting account:', error);
            alert('Error deleting account.');
        }
      // Here you would ideally call an API to delete the account

    } else {
      alert("Incorrect username or password.");
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const user = await axios.get(`${apiUrl}/users/${currentUser}`);
      console.log(user);
      setUsername(user.data.username);
      setEmail(user.data.email);
      setName(user.data.name);
    };
    if (currentUser) {
      fetchUser();
    }
  }, [currentUser]);

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center mb-6">Profile</h1>

      {/* Settings Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Settings</h2>
        <div className="flex justify-between items-center mb-4">
          <label className="font-semibold text-gray-700">Username</label>
          <span className="text-gray-600">{username}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <label className="font-semibold text-gray-700">Email</label>
          <div className="flex items-center">
            <span className="text-gray-600">{email}</span>
            <button onClick={openEmailModal} className="ml-2 text-blue-500">
              ✎
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <label className="font-semibold text-gray-700">Name</label>
          <div className="flex items-center">
            <span className="text-gray-600">{name}</span>
            <button onClick={openNameModal} className="ml-2 text-blue-500">
              ✎
            </button>
          </div>
        </div>
        <button
          onClick={openPasswordModal}
          className="w-full py-2 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Update Password
        </button>
        <button
          onClick={openAccountDeleteModal}
          className="w-full py-2 mt-4 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Delete Account
        </button>
      </section>

      {/* Purchase History Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Purchase History
        </h2>
        <ul className="space-y-2">
          <li className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200">
            Product 1 - $25.99
          </li>
          <li className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200">
            Product 2 - $45.00
          </li>
          <li className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200">
            Product 3 - $10.50
          </li>
        </ul>
      </section>

      {/* Reviews Given Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Reviews Given
        </h2>
        <ul className="space-y-2">
          <li className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200">
            Product 1: "Great quality!"
          </li>
          <li className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200">
            Product 2: "Would buy again!"
          </li>
          <li className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200">
            Product 3: "Good value for money."
          </li>
        </ul>
      </section>

      {/* Email Update Modal */}
      <EmailUpdateModal
        isModalOpen={isEmailModalOpen}
        closeModal={closeEmailModal}
        newEmail={newEmail}
        setNewEmail={setNewEmail}
        currentPassword={currentPassword}
        setCurrentPassword={setCurrentPassword}
        handleEmailUpdate={handleEmailUpdate}
      />

      {/* Name Update Modal */}
      <NameUpdateModal
        isModalOpen={isNameModalOpen}
        closeModal={closeNameModal}
        newName={newName}
        setNewName={setNewName}
        currentPassword={currentPassword}
        setCurrentPassword={setCurrentPassword}
        handleNameUpdate={handleNameUpdate}
      />

      {/* Password Update Modal */}
      <PasswordUpdateModal
        isModalOpen={isPasswordModalOpen}
        closeModal={closePasswordModal}
        oldPassword={oldPassword}
        setOldPassword={setOldPassword}
        newPassword={newPassword}
        setNewPassword={setNewPassword}
        handlePasswordUpdate={handlePasswordUpdate}
      />

      {/* Account Delete Modal */}
      <AccountDeleteModal
        isModalOpen={isAccountDeleteModalOpen}
        closeModal={closeAccountDeleteModal}
        username={accountUsername}
        setUsername={setAccountUsername}
        password={accountPassword}
        setPassword={setAccountPassword}
        handleAccountDelete={handleAccountDelete}
      />
    </div>
  );
};

export default ProfilePage;
