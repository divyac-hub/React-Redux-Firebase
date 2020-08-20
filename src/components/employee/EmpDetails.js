import React from 'react';
import './employee.css';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {Redirect} from 'react-router-dom';

const EmpDetails = (props) => {
    console.log(props);
    let id = props.match.params.id;
    const { emp,auth} = props;
    if(!auth.uid) return <Redirect to='/signin' />
   
    if (emp) {
        return(
        <div className='detailsEmp'>
            <div id='myModal' className='modal'>
                <div className='content'>

                    <div className='detailsList'>
                        <p className='empDetailsHeader'>Employee Details</p>
                        <p>User Name:<span>{emp.username}</span></p>
                        <p>First Name:<span>{emp.firstName}</span></p>
                        <p>Last Name: <span>{emp.lastName}</span></p>
                        <p>Email:<span>{emp.email}</span></p>
                        <p>Age : <span>{emp.age}</span></p>
                        <p>Company:<span>{emp.company}</span></p>
                        <p>Aadhaar No.: <span>{emp.AadhaarNo}</span></p>
                    </div>
                    <div className='detailsPhoto'>
                         <img src={emp.photo} alt='photo' width="200" height="200" />
                    </div>
                </div>
            </div>
        </div>);
    } else {
        return (
            <div className='loading'>
                <p>Loading</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const id = ownProps.match.params.id;
    const employee = state.firestore.data.employee;
    const emp = employee ? employee[id] : null
    return {
        emp: emp,
        auth:state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'employee' }
    ])
)(EmpDetails)
