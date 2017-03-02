import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import nextConnectRedux from 'next-connect-redux';
import reducers from './reducers';

const logger = createLogger();

const enhancer = compose(
  applyMiddleware(
    reduxThunkMiddleware,
    logger,
  ),
);


export const initStore = (initialState) => {
  const store = createStore(
    reducers,
    initialState,
    enhancer,
  );
  return store;
};

export const nextConnect = nextConnectRedux(initStore);
