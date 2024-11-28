import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState('');

  const login = async (username, password) => {
    try {
      const response = await axios.post('http://127.0.0.1:8080/login', {
        username,
        password,
      });
      if (response.status === 200) {
        const token  = response.data;
        console.log(response)
        localStorage.setItem('jwtToken', token);
        setToken(token);
        navigate('/domain'); // Redirect to the dashboard or any other page
      }
    } catch (error) {
      console.error('Login failed:', error);
      // alert('Authentication failed');
      if (error.status !== 500) {
        setAlertMessage(error.response.data);
      }
      else {
        setAlertMessage("Unexpected Error Occured!")
      }
    }
  };

  const logout = () => {
    localStorage.removeItem('jwtToken');
    setToken(null);
    navigate('/');
  };

  return { token, login, logout, alertMessage, setAlertMessage };
};

export default useAuth;
