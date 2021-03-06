import axios from 'axios';
import {FETCH_USER} from './types'; 

export const fetchUser = () => {
    return async(dispatch) => {     //Redux Thunk sees that a function is returned and passes the dispatch function to the returned function
      const currentUser=  await axios.get('/api/current_user');
            dispatch({
                type: FETCH_USER,
                payload: currentUser.data
            })
    }

    

};

export const handleToken = (token) => async(dispatch) => {
    const res = await axios.post('/api/stripe', token); 

    dispatch({type: FETCH_USER, payload: res.data}); 

}