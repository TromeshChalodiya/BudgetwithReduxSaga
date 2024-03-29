import { CLOSE_MODAL, OPEN_MODAL } from '../constants/addIncome';

export const openModal = (id) => {
  return {
    type: OPEN_MODAL,
    payload: {
      id
    }
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
