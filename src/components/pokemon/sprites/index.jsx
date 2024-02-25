import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import './style.css';
import SpriteGallery from './SpriteGallery';

const Sprites = ({ sprites }) => (
    <Box className='box-sprite'>
        <Paper elevation={3} sx={{ width: '100%' }}>
            <div className='sprite-item'>
                <h3>Sprites:</h3>
                <SpriteGallery
                    sprites={sprites}
                />
            </div>
        </Paper>
    </Box>
);

Sprites.propTypes = {
    sprites: PropTypes.object.isRequired,
};

export default Sprites;
