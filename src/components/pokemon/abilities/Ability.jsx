import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Alert } from '@mui/material';

import './style.css';

const Ability = ({ ability }) => {
  const { name } = ability.ability;
  const [shortEffect, setShortEffect] = useState(null);

  useEffect(() => {
    const fetchShortEffect = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/ability/${name}`);
        const data = await response.json();
        const effectEntry = data.effect_entries.find(entry => entry.language.name === 'en');
        if (effectEntry) {
          setShortEffect(effectEntry.short_effect);
        } else {
          setShortEffect('Short effect not available');
        }
      } catch (error) {
        console.error('Error fetching short effect: ', error);
        setShortEffect('Error fetching short effect');
      }
    };

    fetchShortEffect();
  }, [name]);

  return (
    <div>
      <Alert variant="outlined" severity="info">
        <h3>{name}</h3>
        {shortEffect}
      </Alert>
    </div>
  );
};

Ability.propTypes = {
  ability: PropTypes.object.isRequired,
};

export default Ability;
