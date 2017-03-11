import { combineReducers } from 'redux';
import events from './events';
import profile from './artist-profile';
import flash from './flash';
import auth from './auth';
import attendees from './attendees';

const rootReducer = combineReducers({
  events,
  profile,
  flash,
  auth,
  attendees,
});

export default rootReducer;
