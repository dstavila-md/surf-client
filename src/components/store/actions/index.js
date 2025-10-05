import axios from 'axios';
import { FETCH_USER } from './types';

const fetchUser = () => {
  return function (dispatch) {
    axios
      .get('/api/current_user')
      .then((res) => {
        return dispatch({ type: FETCH_USER, payload: res });
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
};
