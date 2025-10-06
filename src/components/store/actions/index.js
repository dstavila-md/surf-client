import axios from 'axios';
import { FETCH_USER } from './types';

const fetchUser = () => async (dispatch) => {
  try {
    const response = axios.get('/api/current-user');
    await dispatch({ type: FETCH_USER, payload: response.data });
  } catch (error) {
    console.log('error', error);
  }
};

export { fetchUser };
