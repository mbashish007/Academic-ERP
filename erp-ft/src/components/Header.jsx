import React from 'react';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';

const Header = ({isloggedIn}) => {

const {token, logout} = useAuth();

console.log(token);
  return  ( 
    <header className="sticky top-0 bg-blue-800 text-white p-4 flex justify-between items-center shadow-lg w-full">
      <div className="text-xl font-bold">Academic ERP</div>
     
      
      {isloggedIn && ( 
         <div>
        <Link to="/domain" className="bg-white hover:bg-blue-100 text-blue-900 font-bold py-2 px-4 rounded mr-3">Domain</Link>

        <button onClick={logout} 
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" > Logout 
      </button> 
       </div>)
      }
     
    </header>
  );
};

export default Header;
