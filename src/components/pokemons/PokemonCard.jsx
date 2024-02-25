import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CardActionArea, Chip } from '@mui/material';
import PropTypes from 'prop-types';

import { GetTypeColor } from './GetTypeColor';

function PokemonCard({ pokemon, index, onTypeClick, handlePokemonClick }) {
  const handleTypeClick = (type) => {
    onTypeClick(type);
  };

  return (
    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 345 }} onClick={() => handlePokemonClick(pokemon.id)}>
        <CardActionArea>
          <CardMedia
            component="img"
            width="140"
            alt={pokemon.name}
            src={pokemon.sprites?.other?.home?.front_default || ''}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {pokemon.name}
            </Typography>
            <strong>Stats:</strong>
            {pokemon.stats?.map((stat) => (
              <div key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </div>
            ))}
            <strong>Types:</strong>
            {pokemon.types?.map((type) => (
              <Chip
                key={type.type.name}
                label={type.type.name}
                color="primary"
                sx={{ backgroundColor: GetTypeColor(type.type.name) }}
                onClick={(event) => {
                  event.stopPropagation(); // Зупиняє подальше поширення події, щоб не викликати onClick вище
                  handleTypeClick(type.type.name, type);
                }}
              />
            ))}
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onTypeClick: PropTypes.func.isRequired,
  handlePokemonClick: PropTypes.func.isRequired,
};

export default PokemonCard;
