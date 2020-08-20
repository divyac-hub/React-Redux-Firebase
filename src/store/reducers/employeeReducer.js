const intiState = {
    // employeeData: [
    //     { id: '1', userName: 'Divya', FirstName: 'div', LastName: 'ya', email: 'csdj@gmail.com', dob: '10-08-1992', company: 'company', aadharNo: '1234567899', url: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png' },
    //     { id: '2', userName: 'Divya', FirstName: 'div', LastName: 'ya', email: 'csdj@gmail.com', dob: '10-08-1992', company: 'company', aadharNo: '1234567899', url: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png' },
    //     { id: '3', userName: 'Divya', FirstName: 'div', LastName: 'ya', email: 'csdj@gmail.com', dob: '10-08-1992', company: 'company', aadharNo: '1234567899', url: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png' },
    //     { id: '4', userName: 'Divya', FirstName: 'div', LastName: 'ya', email: 'csdj@gmail.com', dob: '10-08-1992', company: 'company', aadharNo: '1234567899', url: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png' },
    //     { id: '5', userName: 'Divya', FirstName: 'div', LastName: 'ya', email: 'csdj@gmail.com', dob: '10-08-1992', company: 'company', aadharNo: '1234567899', url: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png' }
    // ]
}

const employeeReducer = (state = intiState, action) => {
    switch (action.type) {
        case 'CREATE_EMPLOYEE':
            console.log('created employee', action.employee);
            return state;
        case 'CREATE_EMPLOYEE_ERROR':
            console.log('create employee error', action.err);
            return state;

        default:
            return state;
    }
}

export default employeeReducer