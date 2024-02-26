import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function ButtonSaveOrCancel({ addEntry }) {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>Cancel</Button>
      <Button.Or />
      <Button primary onClick={() => addEntry()}>
        Ok
      </Button>
    </Button.Group>
  );
}

ButtonSaveOrCancel.propTypes = {
  addEntry: PropTypes.func.isRequired
};

export default ButtonSaveOrCancel;
