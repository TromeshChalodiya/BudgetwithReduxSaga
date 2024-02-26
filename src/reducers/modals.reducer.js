import { CLOSE_MODAL, OPEN_MODAL } from '../constants/addIncome';

const initialState = {
  isOpen: false
};

function modalsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case OPEN_MODAL: {
      return { ...state, isOpen: true, id: action.payload.id };
    }
    case CLOSE_MODAL: {
      return { ...state, isOpen: false, id: null };
    }
    default:
      return state;
  }
}

export default modalsReducer;
