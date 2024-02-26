import PropTypes from 'prop-types';
import React from 'react';
import { Statistic } from 'semantic-ui-react';

function DisplayBalance({ title, value, color }) {
  return (
    <Statistic size="tiny" color={color}>
      <Statistic.Label style={{ textAlign: 'center' }}>{title}</Statistic.Label>
      <Statistic.Value>$ {isNaN(value) ? 0 : value}</Statistic.Value>
    </Statistic>
  );
}

DisplayBalance.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
};

export default DisplayBalance;
