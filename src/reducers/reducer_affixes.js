import { FETCH_AFFIXES } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_AFFIXES:
      return {...state, [action.payload.data.region]: action.payload.data};
    default:
      return state;
  }
}
