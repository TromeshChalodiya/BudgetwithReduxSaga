import axios from 'axios';
import { call, put, take } from 'redux-saga/effects';
import { REMOVE_ENTRY } from '../constants/addIncome';

export function* entrySagaDeletion() {
  while (true) {
    const payload = yield take(REMOVE_ENTRY);
    yield call(deleteEntry, payload.payload.id);
    yield put({ type: REMOVE_ENTRY, payload: { id: payload.id } });
  }
}

function deleteEntry(id) {
  axios.delete(`http://localhost:3002/entries/${id}`);
  axios.delete(`http://localhost:3002/values/${id}`);
}
