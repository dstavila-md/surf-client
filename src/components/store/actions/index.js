import axios from 'axios';
import { FETCH_USER } from './types';

const fetchUser = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/current-user');
    await dispatch({ type: FETCH_USER, payload: response.data });
  } catch (error) {
    console.log('user fetch error', error);
  }
};

const handleToken = (token) => async (dispatch) => {
  try {
    const res = await axios.post('/api/stripe', token);
    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (error) {
    console.log('payments error', error);
  }
};

export { fetchUser, handleToken };
