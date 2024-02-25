import React, { startTransition } from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const BarForFilter = ({ searchItemType, setSearchItemType, navigate, fetchPokemonData }) => {

  const handleSearchClear = () => {
    startTransition(() => {
      setSearchItemType('');
      fetchPokemonData('https://pokeapi.co/api/v2/pokemon');
      navigate('/');
    })
  };

  return (
    <div>
      <TextField
        variant="outlined"
        value={searchItemType}
        InputProps={{
          readOnly: true,
        }}
      />
      <Button variant="outlined" onClick={handleSearchClear}>Clear filter</Button>
    </div>
  );
};

BarForFilter.propTypes = {
  searchItemType: PropTypes.string.isRequired,
  setSearchItemType: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  fetchPokemonData: PropTypes.func.isRequired,
};

export default BarForFilter;