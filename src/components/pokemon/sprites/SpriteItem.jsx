import React from 'react';
import PropTypes from 'prop-types';

const SpriteItem = ({ sprite, spriteKey }) => (
  <img
    alt={`Sprite ${spriteKey}`}
    src={sprite}
    style={{ width: '2.3em', height: 'auto' }}
  />
);

SpriteItem.propTypes = {
  sprite: PropTypes.string.isRequired,
  spriteKey: PropTypes.string.isRequired,
};

export default SpriteItem;
