
export const createEmpDetails = (employee) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database 
        const firestore = getFirestore();

        firestore.collection('employee').add({
            ...employee,
            AadhaarNo: employee.aadhaar,
            company: employee.company,
            age: employee.age,
            email: employee.email,
            firstName: employee.firstName,
            lastName: employee.lastName,
            photo: employee.photo,
            username: employee.username
        }).then(() => {
            dispatch({
                type: 'CREATE_EMPLOYEE', employee
            });
        }).catch((err) => {
            dispatch({ type: 'CREATE_EMPLOYEE_ERROR', err });
        })


    }
};