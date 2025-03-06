import { useNavigate } from 'react-router-dom';
import { Button } from '@relume_io/relume-ui';
import { GoAlertFill } from "react-icons/go";

export const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 mt-12 bg-gradient-to-r from-blue-300 to-purple-200 text-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <GoAlertFill size={48} className="text-red-500 mb-4 w-full" />
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Page Not Found</h1>
        <p className="text-gray-600 mb-6">Sorry, the page you’re looking for doesn’t exist.</p>
        <Button onClick={goHome} className="px-6 py-3 text-lg rounded-xl text-white">
          Go to Home
        </Button>
      </div>
    </div>
  );
};
