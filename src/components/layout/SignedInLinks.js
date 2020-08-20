import React from 'react'
import { NavLink } from 'react-router-dom';
import './layout.css';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

const SignedIn = (props) => {

    return (
        <div className='flex-content'>
            <div><NavLink to='/addDetails'>Add Details</NavLink></div>
            <div><a className='logout' onClick={props.signOut}>Log Out</a></div>
            <div className='nameLink'><NavLink to='/'>{props.auth.email.substring(0, 1).toUpperCase()}</NavLink></div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedIn);