import React from 'react';
import PropTypes from 'prop-types';
import Ability from './Ability';
import Paper from '@mui/material/Paper';

import './style.css';

const Abilities = ({ abilities }) => (

  <Paper elevation={3} className='box-ability'>
    <h3>Abilities:</h3>
    <div>
      {abilities && abilities.map((ability, index) => (
        <Ability key={index} ability={ability} />
      ))}
    </div>
  </Paper>
);

Abilities.propTypes = {
  abilities: PropTypes.array.isRequired,
};

export default Abilities;
