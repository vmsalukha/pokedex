import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Chart = ({ stat }) => {
  const renderColumns = () => {
    const columns = [];
    for (let i = 15; i >= 0; i--) {
      const columnClass = stat.base_stat >= (i + 1) * 10 ? `column column-${i + 1}` : 'column-empty';
      columns.push(<div key={i} className={columnClass}></div>);
    }
    return columns;
  };

  return (
    <div>
      <div className="column-chart">
        {renderColumns()}
        <p>
          {stat.stat.name.split('-').map((word, index) => (
            <React.Fragment key={index}>
              {word.toUpperCase()}
              {index !== stat.stat.name.split('-').length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

Chart.propTypes = {
  stat: PropTypes.object.isRequired,
};

export default Chart;

