import React from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex items-center justify-center space-x-2">
      {/* First Page */}
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className={`px-2 py-1 rounded ${
          currentPage === 1 ? "text-gray-300" : "text-black"
        }`}
      >
        &laquo;
      </button>

      {/* Previous Page */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-2 py-1 rounded ${
          currentPage === 1 ? "text-gray-300" : "text-black"
        }`}
      >
        &lt;
      </button>

      {/* Page Numbers */}
      {pages.map((page) =>
        page === 1 ||
        page === totalPages ||
        Math.abs(page - currentPage) <= 1 ? (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded-full ${
              page === currentPage
                ? "bg-teal-400 text-white"
                : "text-black hover:bg-gray-200"
            }`}
          >
            {page}
          </button>
        ) : page === currentPage + 2 || page === currentPage - 2 ? (
          <span key={page} className="px-3 py-1 text-gray-500">
            ...
          </span>
        ) : null
      )}

      {/* Next Page */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-2 py-1 rounded ${
          currentPage === totalPages ? "text-gray-300" : "text-black"
        }`}
      >
        &gt;
      </button>

      {/* Last Page */}
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className={`px-2 py-1 rounded ${
          currentPage === totalPages ? "text-gray-300" : "text-black"
        }`}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
