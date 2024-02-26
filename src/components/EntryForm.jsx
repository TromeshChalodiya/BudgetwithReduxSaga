import React from 'react';
import { Container, Form, Segment, Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function EntryForm({ description, value, isExpense, setDescription, setValue, setIsExpense }) {
  return (
    <Container>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="Add new Item"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Form.Input
          icon="dollar"
          iconPosition="left"
          width={4}
          label="Value"
          placeholder="100.00"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Form.Group>
      <Segment compact>
        <Checkbox
          toggle
          label="Check if this is Expense"
          checked={isExpense}
          onChange={() => setIsExpense((prevState) => !prevState)}
        />
      </Segment>
    </Container>
  );
}

EntryForm.propTypes = {
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isExpense: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  setIsExpense: PropTypes.func.isRequired
};

export default EntryForm;
