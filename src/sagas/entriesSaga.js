import axios from 'axios';
import { call, fork, put, take } from 'redux-saga/effects';
import { popupAllEntries, popupDetailsEntries } from '../actions/entries.action';
import { GETALL_ENTRIES, POPULATE_ENTRIES } from '../constants/addIncome';

export function* getAllEntries() {
  yield take(GETALL_ENTRIES);
  const result = yield call(axios, 'http://localhost:3002/entries');
  yield put(popupAllEntries(result.data));
}

export function* getDescriptionDetails(id) {
  const { data } = yield call(axios, `http://localhost:3002/values/${id}`);
  yield put(popupDetailsEntries(id, data));
}

export function* getAllEntriesDetails() {
  const { payload } = yield take(POPULATE_ENTRIES);
  for (let index = 0; index < payload.length; index++) {
    const entry = payload[index];
    yield fork(getDescriptionDetails, entry.id);
  }
}
