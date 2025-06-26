import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Start = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 2000); // Auto-redirect after 3 seconds

    return () => clearTimeout(timer); // Cleanup
  }, [navigate]);

  return (
    <div className="bg-neutral min-h-screen w-screen flex items-center justify-center">
      <div className="animate-bounce">
        <h2 className="text-white text-center text-[15px] border-2 p-2 rounded-2xl">
          Vaibhavi Patel
        </h2>
      </div>
    </div>
  );
};

export default Start;
