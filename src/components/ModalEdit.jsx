import React from 'react';
import { Modal, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import EntryForm from './EntryForm';
import { closeModal } from '../actions/modal.action';
import useEntryDetails from '../hooks/useEntryDetails';

function ModalEdit({ isOpen, description, value, isExpense, id }) {
  const dispatch = useDispatch();
  const entryUpdate = useEntryDetails(description, value, isExpense);

  return (
    <Modal open={isOpen}>
      <Modal.Header icon="archive" content="Edit Entry" />
      <Modal.Content>
        <EntryForm
          description={entryUpdate.description}
          value={entryUpdate.value}
          isExpense={entryUpdate.isExpense}
          setDescription={entryUpdate.setDescription}
          setValue={entryUpdate.setValue}
          setIsExpense={entryUpdate.setIsExpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => dispatch(closeModal())}>Close</Button>
        <Button onClick={() => entryUpdate.editEntry(id)} primary>Ok</Button>
      </Modal.Actions>
    </Modal>
  );
}

ModalEdit.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isExpense: PropTypes.string.isRequired
};

export default ModalEdit;
