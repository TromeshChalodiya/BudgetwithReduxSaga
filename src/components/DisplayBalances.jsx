import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import DisplayBalance from './DisplayBalance';

function DisplayBalances({ totalIncome, totalExpense }) {
  return (
    <Segment textAlign="center">
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance title="Income:" value={totalIncome} color="green" />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance title="Expense:" value={totalExpense} color="red" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

DisplayBalances.propTypes = {
  totalIncome: PropTypes.number.isRequired,
  totalExpense: PropTypes.number.isRequired
};

export default DisplayBalances;
