import React, { Component } from 'react'
import Notification from './Notification.js'
import EmployeeList from '../employee/EmpList.js'
import './dashboard.css'
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom'

class Dashboard extends Component {
    render() {
       const {employee,auth}=this.props;
        // console.log(this.props.employee);
        if(!auth.uid) return <Redirect to='/signin' />
        return (
            <div className='row'>
                <div className='side'><EmployeeList employee={employee}/></div>
                <div className='main'><Notification employee={employee} /></div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    console.log(state);
    return{
        employee:state.firestore.ordered.employee,
        auth:state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'employee'}
    ])
)(Dashboard)