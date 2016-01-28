import { UPDATE_USER_NAME } from '../constants/actionTypes';

const initialState = {
  self: {
    name: "",
    pronouns: "",
    tea: "",
    food: ""
  },
  others: []
};

export default function people(state = initialState, action) {

  switch (action.type) {
    case UPDATE_USER_NAME:
      return {
        ...state,
        self: {
          ...state.self,
          name: action.data
        }
      }
  }

  return state;
}
