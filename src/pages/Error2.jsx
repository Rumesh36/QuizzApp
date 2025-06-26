import React from 'react';
import { MdErrorOutline } from 'react-icons/md'; 
import { MdSignalWifiConnectedNoInternet0 } from "react-icons/md";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-100 to-green-300 px-4 py-8">
      

      <div className="flex items-center gap-2 mb-4 animate-bounce">
        <MdErrorOutline className="text-5xl text-green-700" />
        <h1 className='text-4xl font-extrabold text-green-800 max-sm:text-2xl'>
          404 - Page Not Found
        </h1>
      </div>

      
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold max-sm:text-xl text-gray-800">
          Oops! Something went wrong{' '}
          <span className="text-green-600 font-extrabold">TRY AGAIN</span>
        </h2>

        <div className='px-2 py-2 mt-2 flex items-center flex-col'>
          <p className='text-gray-700 font-medium'>
            The page you are looking for might have been moved or temporarily unavailable.
          </p>
          <p className='text-5xl '><MdSignalWifiConnectedNoInternet0/></p>
        </div>
      </div>

      {/* Button */}
      <div className='py-4'>
        <button
          className="bg-gradient-to-r from-green-500 to-green-700 text-white font-bold px-6 py-3 rounded-2xl shadow-lg hover:from-green-600 hover:to-green-800 transition-all duration-300"
        >
          Click Here To Go Back..
        </button>
      </div>
    </div>
  );
};

export default Error;
