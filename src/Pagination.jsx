import React, { useState } from 'react';

const initialData = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
  { id: 6, name: 'Item 6' },
  { id: 7, name: 'Item 7' },
  { id: 8, name: 'Item 8' },
  { id: 9, name: 'Item 9' },
  { id: 10, name: 'Item 10' },
  { id: 11, name: 'Item 11' },
  { id: 12, name: 'Item 12' },
];

const PAGE_SIZE = 4;

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(initialData.length / PAGE_SIZE);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const paginatedData = initialData.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  return (
    <div>
      <ul>
        {paginatedData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              type="button"
              key={page}
              onClick={() => handleClick(page)}
              style={{
                fontWeight: currentPage === page ? 'bold' : 'normal',
              }}
            >
              {page}
            </button>
          ),
        )}
      </div>
    </div>
  );
}
