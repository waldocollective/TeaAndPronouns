'use strict';

import { UPDATE_SELF_NAME } from '../constants/actionTypes';

const initialState = {
  self: {
    name: '',
    pronouns: '',
    tea: '',
    food: ''
  },
  others: []
};

export default function people(state = initialState, action) {

  switch (action.type) {

    case UPDATE_SELF_NAME:
      console.log('update self name', action.data);
      return {
        ...state,
        self: {
          ...state.self,
          name: action.data
        }
      };
  }

  return state;
}
