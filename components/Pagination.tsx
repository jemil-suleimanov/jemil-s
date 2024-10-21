import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  return (
    <div className="flex justify-center items-center mt-8 space-x-4">
      <button
        className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50"
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <div className="flex space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`w-8 h-8 rounded ${
              page === currentPage
                ? 'bg-primary text-white'
                : 'bg-sidebar-bg text-foreground'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
