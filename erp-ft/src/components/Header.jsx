import React from 'react';
import useAuth from '../hooks/useAuth';

const Header = ({isloggedIn}) => {

const {token, logout} = useAuth();

console.log(token);
  return  ( 
    <header className="sticky top-0 bg-blue-800 text-white p-4 flex justify-between items-center shadow-lg w-full">
      <div className="text-xl font-bold">Academic ERP</div>
      {isloggedIn && ( <button onClick={logout} 
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" > Logout 
      </button> )}
    </header>
  );
};

export default Header;
