import React, {Component} from 'react';
import { Route, BrowserRouter } from 'react-router-dom'; 
import { connect } from 'react-redux';
import * as actions from '../actions'; 

import Header from './Header'; 
import Landing from './Landing'; 
import Dashboard from './Dashboard'; 



class App extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchUser(); 
    }


    render(){
    return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route  exact path='/'  component={Landing}/>
                    <Route exact path='/surveys' component={Dashboard}/>
                    <Route path='/surveys/new' />
                   
                </div>    

            </BrowserRouter>
        </div>    
    )}
}

export default connect(null, actions)(App); 