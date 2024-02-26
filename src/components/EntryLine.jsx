import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Icon, Segment } from 'semantic-ui-react';

import { removeEntry } from '../actions/entries.action';
import { openModal } from '../actions/modal.action';

function EntryLine({ id, description, value, isExpense }) {
  const dispatch = useDispatch();
  return (
    <Segment color={isExpense ? 'red' : 'green'}>
      <Grid columns={3} textAlign="center">
        <Grid.Row>
          <Grid.Column width={10} textAlign="left">
            {description}
          </Grid.Column>
          <Grid.Column width={3} textAlign="right">
            $ {value}
          </Grid.Column>
          <Grid.Column width={3}>
            <Icon name="edit" onClick={() => dispatch(openModal(id))} />
            <Icon name="trash" onClick={() => dispatch(removeEntry(id))} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

EntryLine.propTypes = {
  description: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};

export default EntryLine;
