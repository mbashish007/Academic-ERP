import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useDomain from '../hooks/useDomain';

const DomainForm = ({ mode, onClose }) => {
  const { domain_id } = useParams();
  const { domain, fetchDomain, createDomain, updateDomain } = useDomain();
  const [formData, setFormData] = useState({
    program: '',
    batch: '',
    capacity: null,
    qualification: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (mode === 'edit' && domain_id) {
      fetchDomain(domain_id);
    }
  }, [domain_id]);

  useEffect(() => {
    if (domain) {
      setFormData({
        program: domain.program,
        batch: domain.batch,
        capacity: domain.capacity,
        qualification: domain.qualification
      });
    }
  }, [domain]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mode === 'create') {
      await createDomain(formData);
      navigate('/domain');
    } else if (mode === 'edit') {
      await updateDomain(domain_id, formData);
      navigate(`/domain/${domain_id}`);
    }
    onClose();
  };

  return (
    <div className="bg-white rounded-lg px-4 pt-1 mt-3 pb-4 text-left overflow-hidden transform transition-all sm:max-w-lg sm:w-full sm:p-6">
      <div className="mt-3 text-center sm:mt-5">
      <h3 className="text-2xl font-bold text-blue-800"> {mode === 'create' ? 'Create Domain' : 'Edit Domain'} </h3>
        <div className="mt-2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-4">
              <label htmlFor="formProgram" className="block text-sm font-medium text-gray-700">Program</label>
              <input
                type="text"
                name="program"
                value={formData.program}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="formBatch" className="block text-sm font-medium text-gray-700">Batch</label>
              <input
                type="text"
                name="batch"
                value={formData.batch}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="formCapacity" className="block text-sm font-medium text-gray-700">Capacity</label>
              <input
                type="number"
                name="capacity"
                value={formData.capacity || ''}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="formQualification" className="block text-sm font-medium text-gray-700">Qualification</label>
              <input
                type="text"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {mode === 'create' ? 'Create' : 'Update'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DomainForm;
