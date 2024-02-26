import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addNewEntry, updateEntry } from '../actions/entries.action';
import { closeModal } from '../actions/modal.action';

function useEntryDetails(des = '', val = '', isExp = true) {
  const [description, setDescription] = useState(des);
  const [value, setValue] = useState(val);
  const [isExpense, setIsExpense] = useState(isExp);
  const dispatch = useDispatch();

  useEffect(() => {
    setDescription(des);
    setValue(val);
    setIsExpense(isExp);
  }, [des, val, isExp]);

  const editEntry = (id) => {
    dispatch(
      updateEntry(id, {
        description,
        value,
        isExpense,
        id
      })
    );
    dispatch(closeModal());
    resetValue();
  };

  const addEntry = () => {
    dispatch(
      addNewEntry({
        description,
        value,
        isExpense,
        id: uuidv4()
      })
    );
    resetValue();
  };

  const resetValue = () => {
    setDescription('');
    setValue('');
    setIsExpense(true);
  };
  return {
    description,
    value,
    isExpense,
    setDescription,
    setValue,
    setIsExpense,
    addEntry,
    editEntry
  };
}

export default useEntryDetails;
