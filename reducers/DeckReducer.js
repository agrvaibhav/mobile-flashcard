import {
  FETCH_DECK_DB,
  DELETE_DECK
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DECK_DB:
      return action.payload;
    case DELETE_DECK:
      return action.payload;
    default:
      return state;
  }
};
