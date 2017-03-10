import { combineReducers } from 'redux';
import events from './events';
import profile from './artist-profile';
import flash from './flash';

const rootReducer = combineReducers({
  events,
  profile,
  flash,
});

export default rootReducer;
