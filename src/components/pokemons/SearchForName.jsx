import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SearchForName = ({ onSearch }) => {
  const [searchItem, setSearchItem] = useState('');

  const handleSearch = () => {
    setSearchItem('');
  };

  useEffect(() => {
    // Викликаємо функцію onSearch при зміні searchTerm
    onSearch(searchItem);
  }, [searchItem, onSearch]);

  return (
    <div>
      <TextField
        label="Search by name Pokemon"
        variant="outlined"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <Button
        variant="outlined"
        onClick={handleSearch}
        disabled={!searchItem.trim()}
      >
        Clear
      </Button>
    </div>
  );
};

SearchForName.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchForName;
