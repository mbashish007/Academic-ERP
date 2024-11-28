import { useState, useEffect } from 'react';
import axios from 'axios';
import StudentResponse from '../models/student/StudentResponse';
import { useNavigate } from 'react-router-dom';

const useDomainStudents = () => {
  const [domainStudents, setDomainStudents] = useState([]);

  const fetchStudents = async (domain_id ) => {
    try {
      const token = localStorage.getItem('jwtToken');

      const response = await axios.get(`http://127.0.0.1:8080/api/v1/domain/${domain_id}/students`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.status === 200) {

        setDomainStudents(response.data.map(data => new StudentResponse(data)));
        console.log("Inside hook");
        console.log(domainStudents);
      }
    } catch (error) {
      console.error('Failed to fetch domains:', error);
    }
  };

  // useEffect(() => {
  //   fetchStudents(domain_id);
  // }, []);
  useEffect(() => { console.log("Updated domainStudents:", domainStudents); }, [domainStudents]);

  return { domainStudents,  fetchStudents };

};

export default useDomainStudents;