import React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types'

import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemonList, handleTypeClick, handlePokemonClick }) => {
  return (
    <Grid container spacing={2}>
      {pokemonList.map((pokemon, index) => (
        <PokemonCard
          key={pokemon.id || index}
          pokemon={pokemon}
          index={index}
          onTypeClick={handleTypeClick}
          handlePokemonClick={handlePokemonClick}
        />
      ))}
    </Grid>
  );
}

PokemonList.propTypes = {
  pokemonList: PropTypes.array.isRequired,
  handleTypeClick: PropTypes.func.isRequired,
  handlePokemonClick: PropTypes.func.isRequired,
}

export default PokemonList;