import React from 'react';
import Errorpic from "../assets/img/error.gif";
import { MdErrorOutline } from 'react-icons/md'; 

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-200 to-blue-400">
 
       <div className="flex items-center gap-2 mb-4 animate-bounce">
             <MdErrorOutline className="text-5xl text-red-600 font-bold animate-spin " />
             <h1 className='text-4xl font-extrabold  max-sm:text-2xl'>
               404 - Page Not Found
             </h1>
      </div> 

      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold max-sm:text-2xl">
          Oops! Something went wrong!!!
          <span className="text-red-600">TRY AGAIN</span>
        </h1>

        <div className='px-2 py-2'>
            <p className='text-gray-700 font-semibold'>The page you are looking for might have been removed or temporarily removed </p>
            <p className='font-semibold text-red-500'>Go back or Check your internet connection</p>
        </div>
      </div>

      {/* image section */}
      <div className=''>
        <img
         src={Errorpic} alt="Error"
          className="max-w-full h-auto border-2 rounded-3xl" />
      </div>
            
      <div 
         target="_blank"
         className='py-4 '>     
            <button className=' bg-red-500 rounded-2xl px-4 py-4 text-white font-bold hover:bg-red-700 
            '>Click Here To Go Back..</button>
        </div>

    </div>
    
  );
};

export default Error;
