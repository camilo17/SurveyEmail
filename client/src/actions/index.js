import axios from 'axios';
import {FETCH_USER} from './types'; 

const fetchUser = () => {
    return function(dispatch) {     //Redux Thunk sees that a function is returned and passes the dispatch function to the returned function
        axios.get('/api/current_user')
            .then(res => dispatch({
                type: FETCH_USER,
                payload: res
            }))
    }

    

};