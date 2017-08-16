import React, {Component} from 'react';
import { Link } from 'react-router-dom'; 
import {connect} from 'react-redux';

class Header extends Component {
    renderContent(){
        switch(this.props.auth){
            case null:
                return;
            case false:
                return (
                    <li><a href="/auth/google">Login with Google</a></li>
                )

            default:
                return <li><a href="/api/logout">Logout</a></li>
        }
    }




    render(){
        return (
            <nav>
                <div className="nav-wrapper deep-purple lighten-1">
                    <Link 
                    className="left brand-logo" 
                    to={this.props.auth ? '/surveys': '/'}
                    >
                    Emaily</Link>
                    <ul className="right">
                        {this.renderContent()}
                        
                    </ul>    
                </div>
            </nav>     
        );
    }
}

function mapStateToProps(state){
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Header); 