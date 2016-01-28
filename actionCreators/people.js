import { UPDATE_SELF_NAME } from '../constants/actionTypes';

export function updateSelfName (userName) {
  return {
    type: UPDATE_SELF_NAME,
    data: userName
  };
}
