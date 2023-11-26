import React from 'react';

const Pagination = ({ apartmentsPerPage, totalApartments, currentPage, onPageChange }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalApartments / apartmentsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="flex justify-center space-x-2 py-2">
                <li>
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-full ${currentPage === 1 ? "bg-gray-300 text-gray-600" : "bg-blue-500 text-white"}`}
                    >
                        Previous
                    </button>
                </li>
                {pageNumbers.map((number) => (
                    <li key={number} className={`p-2 border border-gray-300 hover:border-blue-500 cursor-pointer rounded-full ${currentPage === number ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
                        <button onClick={() => onPageChange(number)} className="px-4 py-2 rounded-full">
                            {number}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === Math.ceil(totalApartments / apartmentsPerPage)}
                        className={`px-4 py-2 rounded-full ${currentPage === Math.ceil(totalApartments / apartmentsPerPage) ? "bg-gray-300 text-gray-600" : "bg-blue-500 text-white"}`}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
