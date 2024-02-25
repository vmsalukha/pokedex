import React from 'react';
import PropTypes from 'prop-types';
import SpriteItem from './SpriteItem';
import { v4 as uuidv4 } from 'uuid';

const SpriteGallery = ({ sprites }) => {
  const renderSprites = () => {
    const spriteCollection = [];

    Object.values(sprites).forEach(generation => {
      Object.values(generation).forEach(game => {
        Object.values(game).forEach(sprite => {
          if (sprite && typeof sprite === 'string' && sprite.startsWith('http')) {
            spriteCollection.push(sprite);
          }
        });
      });
    });

    return spriteCollection.map(sprite => (
      <SpriteItem
        key={uuidv4()}
        sprite={sprite}
        spriteKey={uuidv4()}
      />
    ));
  };

  return (
    <div className='gallery-sprite'>
      {renderSprites()}
    </div>
  );
};

SpriteGallery.propTypes = {
  sprites: PropTypes.object.isRequired,
};

export default SpriteGallery;
