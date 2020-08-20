import React, { Component } from 'react'
import './auth.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions.js'
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.signIn(this.state);
    }

    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className='sigin'>
                <form>
                    <h1> Sign in</h1>
                    <div>
                        <div className='userName'>
                            <div className='userIcon' ><FontAwesomeIcon icon={faUser} color="white" /></div>
                            <div className='userinput'>
                                <input type="email" onChange={this.handleChange} id="email" /></div>
                        </div>
                        <div className='userName'>
                            <div className='userIcon' ><FontAwesomeIcon icon={faLock} color="white" /></div>
                            <div className='userinput'>
                                <input onChange={this.handleChange} type="password" id="password" /></div>
                        </div>
                        <div className='btn' onClick={this.handleSubmit}>
                            <button> Log in</button>
                        </div>
                        <div className='authError'>{authError ? <p>{authError}</p> : null}</div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)