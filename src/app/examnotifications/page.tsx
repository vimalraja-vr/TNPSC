'use client';
import React, { useState, useEffect } from 'react';

interface Exam {
  name: string;
  vacancy: number;
  salary: string;
  applyLink: string;
  notificationTamil: string;
  notificationEnglish: string;
  startDate: string;
  endDate: string;
}

const ITEMS_PER_PAGE = 4;

const Page: React.FC = () => {
  const [exams, setExams] = useState<Exam[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Sample JSON data (replace with API call in a real application)
  const examData: Exam[] = [
    {
      name: 'TNPSC Group 2',
      vacancy: 2623,
      salary: 'Rs. 20,600 - 65,500',
      applyLink: 'https://apply.tnpscexams.in',
      notificationTamil: 'https://tnpsc.gov.in/examdashboard/web/indextamil.aspx?notno=11/2025',
      notificationEnglish: 'https://tnpsc.gov.in/examdashboard/web/index.aspx?notno=11/2025',
      startDate: '25th April 2025',
      endDate: '24th May 2025',
    },
    {
      name: 'TNPSC Group 4',
      vacancy: 3935,
      salary: 'Rs. 19,500 - 62,000',
      applyLink: 'https://apply.tnpscexams.in',
      notificationTamil: 'https://tnpsc.gov.in/examdashboard/web/indextamil.aspx?notno=12/2025',
      notificationEnglish: 'https://tnpsc.gov.in/examdashboard/web/index.aspx?notno=12/2025',
      startDate: '10th May 2025',
      endDate: '9th June 2025',
    },
    {
      name: 'TNPSC Group 1',
      vacancy: 92,
      salary: 'Rs. 56,100 - 1,77,500',
      applyLink: 'https://apply.tnpscexams.in',
      notificationTamil: 'https://tnpsc.gov.in/examdashboard/web/indextamil.aspx?notno=13/2025',
      notificationEnglish: 'https://tnpsc.gov.in/examdashboard/web/index.aspx?notno=13/2025',
      startDate: '15th March 2025',
      endDate: '14th April 2025',
    },
    {
      name: 'TNPSC Group 3',
      vacancy: 1200,
      salary: 'Rs. 20,600 - 65,500',
      applyLink: 'https://apply.tnpscexams.in',
      notificationTamil: 'https://tnpsc.gov.in/examdashboard/web/indextamil.aspx?notno=14/2025',
      notificationEnglish: 'https://tnpsc.gov.in/examdashboard/web/index.aspx?notno=14/2025',
      startDate: '20th June 2025',
      endDate: '19th July 2025',
    },
    {
      name: 'TNPSC VAO',
      vacancy: 450,
      salary: 'Rs. 19,500 - 62,000',
      applyLink: 'https://apply.tnpscexams.in',
      notificationTamil: 'https://tnpsc.gov.in/examdashboard/web/indextamil.aspx?notno=15/2025',
      notificationEnglish: 'https://tnpsc.gov.in/examdashboard/web/index.aspx?notno=15/2025',
      startDate: '5th July 2025',
      endDate: '4th August 2025',
    },
  ];

  useEffect(() => {
    // Simulate fetching data
    setExams(examData);
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(exams.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentExams = exams.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          TNPSC Exam Notifications
        </h1>
        <div className="grid gap-6 md:grid-cols-2">
          {currentExams.map((exam, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {exam.name}
              </h2>
              <div className="space-y-3">
                <p className="text-gray-600">
                  <span className="font-medium">Vacancies:</span> {exam.vacancy}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Salary:</span> {exam.salary}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Start Date:</span> {exam.startDate}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">End Date:</span> {exam.endDate}
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <a
                    href={exam.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
                  >
                    Apply Now
                  </a>
                  <a
                    href={exam.notificationTamil}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
                  >
                    Tamil Notification
                  </a>
                  <a
                    href={exam.notificationEnglish}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
                  >
                    English Notification 1
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded ${
                  currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;