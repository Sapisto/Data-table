import { useState, useMemo } from 'react';

const useFiltering = (data, column) => {
  const [filter, setFilter] = useState('');
  
  const filteredData = useMemo(() => {
    if (!filter) return data;
    return data.filter(item => 
      item[column].toLowerCase().includes(filter.toLowerCase())
    );
  }, [data, filter, column]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return {
    filteredData,
    handleFilterChange,
    filter
  };
};

export default useFiltering;
