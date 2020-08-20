import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import SignedIn from './SignedInLinks.js';
import SignedOut from './SignedOutLinks.js';
import './layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        }
    }
 
    showMenuBar = () => {
        console.log("jfhfk");
        this.setState({ showMenu: !this.state.showMenu });
    }

    render() {
        const {auth}=this.props;
        // console.log(auth);
        const links =auth.uid?<div className='navLinks'><SignedIn auth={auth} /></div>:<div className='navLinks'><SignedOut /></div>;
        return (
            <nav className='navBar'>
                <div className='flex-container'>
                    <div className='header'>Employee App</div>
                    <div className='navContents'>
                        {links}
                    </div>

                    <div className='mobileNavContent' onClick={this.showMenuBar}>
                        <FontAwesomeIcon icon={faBars} color="white" />

                    </div>
                    {this.state.showMenu ?
                        <div className="dropdown" >
                            <div className="dropdown-content">
                                <div className='navLinks'><SignedOut /></div>
                                <div className='navLinks'><SignedIn  auth={auth} /></div>
                            </div>
                        </div>
                        : null}
                </div>
            </nav>
        );
    }
}


const mapsStateToProps=(state)=>{
    return{
        auth: state.firebase.auth
    };
}
export default connect(mapsStateToProps)(NavBar);