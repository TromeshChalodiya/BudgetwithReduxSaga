import React from 'react';
import { Form } from 'semantic-ui-react';
import useEntryDetails from '../hooks/useEntryDetails';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';

function NewEntryForm() {
  const { description, value, isExpense, setDescription, setValue, setIsExpense, addEntry } =
    useEntryDetails();
  return (
    <Form unstackable>
      <EntryForm
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <ButtonSaveOrCancel addEntry={addEntry} />
    </Form>
  );
}

NewEntryForm.propTypes = {};

export default NewEntryForm;
