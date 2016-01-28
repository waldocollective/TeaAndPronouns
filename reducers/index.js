import {combineReducers} from 'redux';

import { INIT } from '../constants/actionTypes'

import people from './people';

const initialState = {
  initialized: false
};

function initialized(state = false, action) {
  if (action.type === INIT) {
    return true;
  } else {
    return state;
  }
}

const combinedSubReducers = combineReducers({
  initialized,
  people
});

export default function rootReducer(state = initialState, action) {
  if (action.type === INIT) {
    state = {
      initialized: true,
      ...action.data
    }
  }

  return combinedSubReducers(state, action);
}
