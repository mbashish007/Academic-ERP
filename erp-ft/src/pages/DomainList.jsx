import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useDomain from '../hooks/useDomain';
import DomainForm from '../components/DomainForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Alert from '../components/Alert';

const DomainList = () => {
  const { domains, fetchDomains, deleteDomain , alertMessage, setAlertMessage} = useDomain();
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleCreateModalClose = () => setShowCreateModal(false);
  const handleCreateModalShow = () => setShowCreateModal(true);

  useEffect(() => { fetchDomains(); }, [showCreateModal]);

  return (
    <>
      {alertMessage && <Alert message={alertMessage} closeAlert={ setAlertMessage } />}
      <Header isloggedIn={true} />
      <div className="container mx-auto my-4 px-4">
        <div className="flex justify-between items-center p-7 bg-white rounded-t-2xl">
          <h2 className="text-2xl font-bold">Domain List</h2>
          <button
            onClick={handleCreateModalShow}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Domain
          </button>
        </div>
        <div className="overflow-x-auto rounded-b-2xl">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="text-center">
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Program</th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Batch</th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity</th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {domains.map(domain => (
                <tr key={domain.domain_id} className="text-center">
                  <td className="py-2 px-4 border-b border-gray-200 text-center">{domain.program}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-center">{domain.batch}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-center">{domain.capacity}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-center">
                    <Link to={`/domain/${domain.domain_id}`} className="inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-2">
                      View
                    </Link>
                    <button
                      onClick={() => deleteDomain(domain.domain_id)}
                      className="inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showCreateModal && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>

              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div className="absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={handleCreateModalClose}
                  >
                    <span className="sr-only">Close</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <DomainForm mode="create" onClose={handleCreateModalClose} />
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default DomainList;
