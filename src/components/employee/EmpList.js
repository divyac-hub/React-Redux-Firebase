import React from 'react'
import './employee.css'
import EmpSummary from './empSummary.js'
import { Link } from 'react-router-dom'

const EmployeeList = ({ employee }) => {
    
    return (
        <div className='displayDetails'>
            {employee && employee.map(employee => {
                return (
                    <Link key={employee.id} to={'/empDetails/' + employee.id}>
                        <EmpSummary employee={employee}  />
                    </Link>
                )
            })}
        </div>
    )
}

export default EmployeeList