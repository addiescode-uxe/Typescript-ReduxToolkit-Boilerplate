import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import logger from 'redux-logger';

const history = createBrowserHistory();

const rootReducers = {};

export const reducers = combineReducers({
  router: connectRouter(history),
  ...rootReducers,
});

export type RootState = ReturnType<typeof reducers>;

const isDev = process.env.NODE_ENV === 'development';

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => {
    return isDev
      ? getDefaultMiddleware().concat(logger)
      : getDefaultMiddleware();
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
