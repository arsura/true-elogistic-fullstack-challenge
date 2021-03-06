import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './auth';

export default function(history) {
  return combineReducers({
    router: connectRouter(history),
    auth
  });
}