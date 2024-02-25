import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import './style.css';
import Chart from './Chart';

const StateChart = ({ stats }) => (
    <Box className='box-paper'>
        <Paper elevation={3}>
            <h3>Stats:</h3>
            <div className='group-charts'>
                {stats?.map((stat) => (
                    <div key={stat.stat.name}>
                        <Chart
                            stat={stat}
                        />
                    </div>
                ))}
            </div>
        </Paper>
    </Box>
);

StateChart.propTypes = {
    stats: PropTypes.array.isRequired,
};

export default StateChart;