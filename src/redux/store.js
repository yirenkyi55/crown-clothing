import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './root-saga';

import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
let middlewareConfig;

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
  middlewareConfig = composeWithDevTools(applyMiddleware(...middlewares));
} else {
  middlewareConfig = applyMiddleware(...middlewares);
}

export const store = createStore(rootReducer, middlewareConfig);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
