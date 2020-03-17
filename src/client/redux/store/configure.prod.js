import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from '../reducers';

export const history = createBrowserHistory();

export default function() {
  const store = createStore(
    rootReducer(history),
    applyMiddleware(routerMiddleware(history))
  );
  return store;
}