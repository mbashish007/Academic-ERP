import React from 'react';

const Alert = ({ message, closeAlert }) => {
  return (
    <div className="flex items-center p-4 my-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800 max-w-lg mx-auto" role="alert">
      <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm1 15H9v-2h2v2zm0-4H9V5h2v6z"/>
      </svg>
      <span className="sr-only">Error</span>
      <div className="flex-grow">
         {message}
      </div>
      <button onClick={() => closeAlert('')} className="ml-auto text-red-800 hover:text-red-600 focus:outline-none"> 
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path> 
        </svg> 
      </button>
    </div>
  );
};

export default Alert;
