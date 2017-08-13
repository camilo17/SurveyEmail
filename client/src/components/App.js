import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'; 

const Header = () => {
    return (
        <h2>
            Header!! 
        </h2>    
    )
}



const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path='/' component={Header}/>
                   
                </div>    

            </BrowserRouter>
        </div>    
    )
}

export default App; 