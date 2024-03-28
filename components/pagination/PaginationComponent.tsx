import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange, previousLabel, nextLabel }) => {
  const handlePreviousClick = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="flex">
      <button 
        className="mr-2 px-3 py-1 bg-gray-300 rounded-md focus:outline-none"
        onClick={handlePreviousClick}
        disabled={currentPage === 1}
      >
        {previousLabel}
      </button>
      <span className="px-3 py-1 bg-gray-300 rounded-md">{currentPage} of {totalPages}</span>
      <button 
        className="ml-2 px-3 py-1 bg-gray-300 rounded-md focus:outline-none"
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        {nextLabel}
      </button>
    </div>
  );
};

export default Pagination;
