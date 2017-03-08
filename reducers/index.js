import { combineReducers } from 'redux';
import events from './events';
import profile from './artist-profile';

const rootReducer = combineReducers({
  events,
  profile,
});

export default rootReducer;
