import { FETCH_USER_TICKETS } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_USER_TICKETS:
      return { ...action.payload };
    default:
      return state;
  }
}
