import * as entriesSagas from './entriesSaga';
import * as entrySagaAddition from './entrySagaAddition';
import * as entrySagaDeletion from './entrySagaDeletion';

const initSagas = (sagaMiddleware) => {
  Object.values(entriesSagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
  Object.values(entrySagaDeletion).forEach(sagaMiddleware.run.bind(sagaMiddleware));
  Object.values(entrySagaAddition).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};

export default initSagas;
