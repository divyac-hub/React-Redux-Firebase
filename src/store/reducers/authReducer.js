const intiState = {
    authError: null
}

const authReducer = (state = intiState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('LOGIN SUCCESS');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout sucess')
            return state;

        default:
            return state
    }


}

export default authReducer