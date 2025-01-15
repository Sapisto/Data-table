import { useState, useMemo } from 'react';

const usePagination = (data, rowsPerPageOptions = [10, 25, 50]) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

  const paginatedData = useMemo(() => {
    const startIndex = currentPage * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return data.slice(startIndex, endIndex);
  }, [data, currentPage, rowsPerPage]);

  const changePage = (page) => setCurrentPage(page);
  const changeRowsPerPage = (rows) => setRowsPerPage(rows);

  return {
    paginatedData,
    currentPage,
    rowsPerPage,
    changePage,
    changeRowsPerPage,
    rowsPerPageOptions
  };
};

export default usePagination;
