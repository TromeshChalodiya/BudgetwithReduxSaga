import {
  ADD_ENTRY,
  GETALL_ENTRIES,
  POPULATE_DETAILS,
  POPULATE_ENTRIES,
  REMOVE_ENTRY,
  UPDATE_ENTRY
} from '../constants/addIncome';

export const addNewEntry = (payload) => {
  return {
    type: ADD_ENTRY,
    payload
  };
};

export const removeEntry = (id) => {
  return { type: REMOVE_ENTRY, payload: { id } };
};

export const updateEntry = (id, entry) => {
  return {
    type: UPDATE_ENTRY,
    payload: {
      id,
      entry
    }
  };
};

export const getAllEntries = () => {
  return {
    type: GETALL_ENTRIES
  };
};

export const popupAllEntries = (entries) => {
  return {
    type: POPULATE_ENTRIES,
    payload: entries
  };
};

export const popupDetailsEntries = (id, entry) => {
  return {
    type: POPULATE_DETAILS,
    payload: { id, entry }
  };
};
