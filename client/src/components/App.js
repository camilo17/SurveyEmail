import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'; 

import Header from './Header'; 



const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={Header}/>
                   
                </div>    

            </BrowserRouter>
        </div>    
    )
}

export default App; 