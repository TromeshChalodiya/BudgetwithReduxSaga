import axios from 'axios';
import { call, takeLatest } from 'redux-saga/effects';
import { ADD_ENTRY } from '../constants/addIncome';

export function* entrySagaAddition() {
  yield takeLatest(ADD_ENTRY, addEntryToDB);
}

function* addEntryToDB({ payload }) {
  // console.log('payload', payload);
  yield call(addEntryDescription, payload);
  yield call(addEntryValue, payload);
}

async function addEntryDescription({ id, description }) {
  await axios.post('http://localhost:3002/entries', {
    id,
    description
  });
}

async function addEntryValue({ id, value, isExpense }) {
  await axios.post('http://localhost:3002/values', {
    id,
    isExpense,
    value
  });
}
