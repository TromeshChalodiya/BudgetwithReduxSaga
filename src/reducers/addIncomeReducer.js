import {
  ADD_ENTRY,
  POPULATE_DETAILS,
  POPULATE_ENTRIES,
  REMOVE_ENTRY,
  UPDATE_ENTRY
} from '../constants/addIncome';

const initialState = [];

function entriesReducer(state = initialState, action = {}) {
  let newStateData;
  switch (action.type) {
    case POPULATE_ENTRIES: {
      return action.payload;
    }
    case ADD_ENTRY: {
      newStateData = state.concat({ ...action.payload });
      return newStateData;
    }
    case REMOVE_ENTRY: {
      newStateData = state.filter((entry) => entry.id !== action.payload.id);
      return newStateData;
    }
    case POPULATE_DETAILS:
    case UPDATE_ENTRY: {
      newStateData = [...state];
      const index = newStateData.findIndex((entry) => entry.id === action.payload.id);
      newStateData[index] = { ...newStateData[index], ...action.payload.entry };
      return newStateData;
    }
    default:
      break;
  }
  return state;
}

export default entriesReducer;
