const key = 'USER_DATA';

import { createStore } from 'redux';
import { AsyncStorage} from 'react-native';

import rootReducer from '../reducers/index';
import { INIT } from '../constants/actionTypes';

export function createDataStore() {

  let store = createStore(rootReducer);

  return AsyncStorage.getItem(key)
    .then((result) => {
      const data = JSON.parse(result);

      store.dispatch({type: INIT, data: data});

      store.subscribe(() => {
        const permanentState = {
          ...store.getState(),
          initialized: undefined
        };
        AsyncStorage.setItem(key, JSON.stringify(permanentState));
      });

      return store;
    });
}
