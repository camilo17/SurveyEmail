import React from 'react'; 
import ReactDOM from 'react-dom';
import App from './components/App'; 
import {Provider} from 'react-redux';
import {createStore , applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk'; 
import reducers from './reducers'; 
import axios from 'axios'; 
import 'materialize-css/dist/css/materialize.min.css'; 

 
window.axios = axios; 



const store = createStore(reducers, {}, applyMiddleware(reduxThunk));




ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>    ,
     document.querySelector('#root')
); 

const survey = {title: 'my title', body: 'hello there frend', recipients: 'cami172015@outlook.com', subject: 'hey frend'}; 