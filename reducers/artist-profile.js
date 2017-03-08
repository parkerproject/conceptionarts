import { FETCH_USER_PROFILE } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_USER_PROFILE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
