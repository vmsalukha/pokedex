import React, { startTransition } from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@mui/material';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { Link } from 'react-router-dom';

import './style.css';

const PokemonImg = ({ pokemon }) => (

  <Paper elevation={3} sx={{ width: '30em', height: 'auto', display: 'flex', flexDirection: 'column' }}>

    <div style={{ alignSelf: 'flex-start' }}>
      <Link
        to="/"
        style={{ textDecoration: 'none', color: 'inherit' }}
        onClick={() => {
          startTransition(() => {
            window.location.href = "/";
          });
        }}
      >
        <ArrowCircleLeftOutlinedIcon sx={{ fontSize: 40 }} />
      </Link>
    </div>

    <div style={{ flex: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ margin: '0' }}>{pokemon.name}</h1>
    </div>

    <div style={{ flex: '70%' }}>
      <img
        style={{ width: '90%', height: 'auto' }}
        alt={pokemon.name}
        src={pokemon.sprites?.other?.home?.front_default || ''}
      />
    </div>
  </Paper>
);

PokemonImg.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonImg;
