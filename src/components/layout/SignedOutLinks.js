import React from 'react'
import { NavLink } from 'react-router-dom';
import './layout.css';

const SignedOut = () => {
    return (
        <div className='flex-content'>
            <div><NavLink to='/signin'>Login</NavLink></div>
        </div>
    )
}

export default SignedOut;