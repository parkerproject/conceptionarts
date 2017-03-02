import { FETCH_EVENTS } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_EVENTS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
