import React, { Component } from 'react';
import '../auth/auth.css';
import { connect } from 'react-redux';
import { createEmpDetails } from '../../store/actions/empActions.js';
import { Redirect } from 'react-router-dom';

class AddDetails extends Component {
    state = {
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        age: '',
        company: '',
        aadhaar: '',
        photo: '',
        errorFlag: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        if (this.state.username === '' || this.state.email === '' || this.state.age === '' || this.state.photo === '') {
            this.setState({ errorFlag: true })
        }
        else {
            this.props.createEmpDetails(this.state)
            this.props.history.push('/');
        }
    }

    render() {
        const { auth } = this.props;
        console.log(auth);
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className='addDetails'>
                <div className='regDetails'>
                    {this.state.errorFlag ? <p className='errorFlag'>User Name, Email, Age and Photo feilds is mandatory</p> : null}
                    <div> <h2> Register Details</h2></div>
                    <div className='labelBlock'>
                        <div className='labelName'><label>User Name</label></div>
                        <div className='labelText'><input type="text" id='username' onChange={this.handleChange} placeholder="Enter User Name" name="userName" required /></div>
                    </div>
                    <div className='labelBlock'>
                        <div className='labelName'><label>FirstName</label></div>
                        <div className='labelText'><input type="text" id='firstName' onChange={this.handleChange} placeholder="Enter First Name" name="firstName" required /></div>
                    </div>
                    <div className='labelBlock'>
                        <div className='labelName'><label>Last Name</label></div>
                        <div className='labelText'><input type="text" id='lastName' onChange={this.handleChange} placeholder="Enter Last Name" name="lastName" required /></div>
                    </div>
                    <div className='labelBlock'>
                        <div className='labelName'><label>Email</label></div>
                        <div className='labelText'><input type="email" id='email' onChange={this.handleChange} placeholder="Enter Email" name="email" required /></div>
                    </div>
                    <div className='labelBlock'>
                        <div className='labelName'><label>Age</label></div>
                        <div className='labelText'><input type="number" id='age' onChange={this.handleChange} placeholder="Enter Your Age" name="age" required /></div>
                    </div>
                    <div className='labelBlock'>
                        <div className='labelName'><label>Company</label></div>
                        <div className='labelText'><input type="text" id='company' onChange={this.handleChange} placeholder="Enter Company" name="company" required /></div>
                    </div>
                    <div className='labelBlock'>
                        <div className='labelName'><label>Aadhaar No.</label></div>
                        <div className='labelText'><input type="tel" id='aadhaar' onChange={this.handleChange} placeholder="Enter Aadhar Card" name="aadhaar" required /></div>
                    </div>
                    <div className='labelBlock'>
                        <div className='labelName'><label>Upload Photo</label></div>
                        <div className='labelText'> <input type="url" onChange={this.handleChange} placeholder="Enter Image Url" id='photo' name='photo' /></div>
                    </div>
                    <div className='btn' onClick={this.handleSubmit}>
                        <button> Add</button>
                    </div>
                </div>
                {this.state.photo ? <div className='ImagePic'>
                    <input type="image" src={this.state.photo} alt="Upload photo" width="100" height="200" />
                </div> : null}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createEmpDetails: (employee) => dispatch(createEmpDetails(employee))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDetails)