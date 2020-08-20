import React from 'react';
import { NavLink } from 'react-router-dom';

const EmpSummary = (employee) => {
    return (
        <div className='empSummary'>
            <div className='employeeDetails'>
                <div className='employeeDetailsBlock'>
                    <div className='empView'>
                        <div className='details'>
                        <div><span className='labelNaming'>Name:</span><span className='namingValue'>{employee.employee.username}</span></div>
                        <div><span className='labelNaming'>Email Id:</span><span className='namingValue'>{employee.employee.email}</span></div>
                        <div><span className='labelNaming'>Id:</span><span className='namingValue'>{employee.employee.id}</span></div>
                            <div className='vewDetailsBtn'>View Details</div>
                        </div>
                        <div className='photo'>
                            <div><img src={employee.employee.photo} alt="Girl" width="100" height="100" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmpSummary