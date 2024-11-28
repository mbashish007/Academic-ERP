import React from 'react';

const StudentList = ({ students }) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-6">
      <div className="bg-blue-700  px-4 py-5 sm:px-6">
        <h3 className="text-2xl leading-6 font-medium text-white">Students</h3>
        </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="text-center">
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Photo</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Roll Number</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">CGPA</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">Graduation Year</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.student_id} className="text-center">
                <td className="py-2 px-4 border-b border-gray-200">
                  <img className="h-10 w-10 rounded-full mx-auto" src={student.photograph_path} alt="" />
                </td>
                <td className="py-2 px-4 border-b border-gray-200">{student.first_name} {student.last_name}</td>
                <td className="py-2 px-4 border-b border-gray-200">{student.roll_number}</td>
                <td className="py-2 px-4 border-b border-gray-200">{student.cgpa}</td>
                <td className="py-2 px-4 border-b border-gray-200">{student.graduation_year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
