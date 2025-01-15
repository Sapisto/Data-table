import { useState } from 'react';

const useSorting = (columns, data) => {
  const [sorting, setSorting] = useState({});

  const sortedData = data.sort((a, b) => {
    if (!sorting.column) return 0;
    
    const column = sorting.column;
    const order = sorting.direction === 'desc' ? -1 : 1;

    if (a[column] < b[column]) return -1 * order;
    if (a[column] > b[column]) return 1 * order;
    return 0;
  });

  const toggleSort = (column) => {
    setSorting((prevSorting) => {
      if (prevSorting.column === column) {
        const direction = prevSorting.direction === 'asc' ? 'desc' : 'asc';
        return { column, direction };
      }
      return { column, direction: 'asc' };
    });
  };

  return {
    sortedData,
    toggleSort,
    sorting
  };
};

export default useSorting;
