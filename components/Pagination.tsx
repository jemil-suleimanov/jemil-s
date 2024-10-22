import React from 'react';
import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  console.log('Pagination Component - Current Page:', currentPage);
  console.log('Pagination Component - Total Pages:', totalPages);

  return (
    <div className="flex justify-center items-center mt-8 space-x-4">
      <p>Debug: Current Page {currentPage}, Total Pages {totalPages}</p>
      {totalPages > 1 && (
        <>
          <Link
            href={`/blog?page=${Math.max(1, currentPage - 1)}`}
            className={`px-4 py-2 bg-primary text-white rounded ${
              currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Previous
          </Link>
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Link
                key={page}
                href={`/blog?page=${page}`}
                className={`w-8 h-8 flex items-center justify-center rounded ${
                  page === currentPage
                    ? 'bg-primary text-white'
                    : 'bg-sidebar-bg text-foreground'
                }`}
              >
                {page}
              </Link>
            ))}
          </div>
          <Link
            href={`/blog?page=${Math.min(totalPages, currentPage + 1)}`}
            className={`px-4 py-2 bg-primary text-white rounded ${
              currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Next
          </Link>
        </>
      )}
    </div>
  );
};

export default Pagination;
