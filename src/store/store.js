import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import createSagaMiddleware from 'redux-saga'

import entriesReducer from '../reducers/addIncomeReducer';
import modalsReducer from '../reducers/modals.reducer';
import initSagas from '../sagas/index'

const sagaMiddlware = createSagaMiddleware()

const middleWares = [sagaMiddlware];

const configureStore = () => {
  const store = createStore(
    combineReducers({
      entries: entriesReducer,
      modals: modalsReducer
    }),
    composeWithDevTools(
      applyMiddleware(...middleWares)
    )
  );

  initSagas(sagaMiddlware)
  return store
}

export default configureStore;
