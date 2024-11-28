import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useDomain from '../hooks/useDomain';
import DomainHeader from '../components/DomainHeader';
import StudentList from '../components/StudentList';
import DomainForm from '../components/DomainForm';
import useDomainStudents from '../hooks/useDomainStudents';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Alert from '../components/Alert';

const DomainDetail = () => {
  const { domain_id } = useParams();
  const { domain, fetchDomain , alertMessage, setAlertMessage } = useDomain();
  const { domainStudents, fetchStudents } = useDomainStudents();
  const [showEditModal, setShowEditModal] = useState(false);
//   const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchDomain(domain_id);
    fetchStudents(domain_id);
  }, [domain_id]);

  useEffect(() => {
    fetchDomain(domain_id);
  }, [showEditModal]);

  const handleEditModalClose = () => setShowEditModal(false);
  const handleEditModalShow = () => setShowEditModal(true);
  

  return (
    <>
    {alertMessage && <Alert message={alertMessage} closeAlert={ setAlertMessage } />}
    <Header isloggedIn ={true}/>
    <div className="container mx-auto my-4 px-4">
      {domain ? (
        <div>
          <DomainHeader domain={domain} onEdit={handleEditModalShow} />
          <StudentList students={domainStudents} />

          {showEditModal && (
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
                      onClick={handleEditModalClose}
                    >
                      <span className="sr-only">Close</span>
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <DomainForm mode="edit" domain_id={domain_id} onClose={handleEditModalClose} />
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    <Footer />
    </>
  );
};

export default DomainDetail;
