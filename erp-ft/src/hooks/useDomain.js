import { useState, useEffect } from 'react';
import axios from 'axios';
import DomainResponse from '../models/domain/DomainResponse';
import { useNavigate } from 'react-router-dom';

const useDomain = () => {
  const [domains, setDomains] = useState([]);
  const [domain, setDomain] = useState(null);

  const fetchDomains = async () => {
    try {
      const token = localStorage.getItem('jwtToken');

      const response = await axios.get('http://127.0.0.1:8080/api/v1/domain', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.status === 200) {
        setDomains(response.data.map(data => new DomainResponse(data)));
      }
    } catch (error) {
      console.error('Failed to fetch domains:', error);
    }
  };

  const fetchDomain = async (domain_id) => {
    try {
      const token = localStorage.getItem('jwtToken');
      const response = await axios.get(`http://127.0.0.1:8080/api/v1/domain/${domain_id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.status === 200) {
        setDomain(new DomainResponse(response.data));
      }
    } catch (error) {
      console.error('Failed to fetch domain:', error);
    }
  };

  const createDomain = async (data) => {
    try {
      const token = localStorage.getItem('jwtToken');
      const response = await axios.post('http://127.0.0.1:8080/api/v1/domain', data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.status === 200) {
        fetchDomains();
      }
    } catch (error) {
      console.error('Failed to create domain:', error);
    }
  };

  const updateDomain = async (domain_id, data) => {
    try {
      const token = localStorage.getItem('jwtToken');
      const response = await axios.put(`http://127.0.0.1:8080/api/v1/domain/${domain_id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.status === 200) {
        fetchDomain(domain_id);
      }
    } catch (error) {
      console.error('Failed to update domain:', error);
    }
  };

  const deleteDomain = async (domain_id) => {
    try {
      const token = localStorage.getItem('jwtToken');
      const response = await axios.delete(`http://127.0.0.1:8080/api/v1/domain/${domain_id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.status === 200) {
        fetchDomains();
      }
    } catch (error) {
      console.error('Failed to delete domain:', error);
    }
  };

  useEffect(() => {
    fetchDomains();
  }, []);

  return { domains, domain, fetchDomains, fetchDomain, createDomain, updateDomain, deleteDomain };
};

export default useDomain;
