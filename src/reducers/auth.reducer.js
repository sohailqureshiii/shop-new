import { authConstants } from "../actions/constants"

const initState = {
    token: null,
    user: {
        name: '',
        loginId: '',
        userEmail: '',
        role: ''
     },
    authenticate: false,
    authenticating: false,
    loading: false,
    error: "",
    message: '',
    errorTF: false,

};

export default (state = initState, action) => {


    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true
            }

            break;
        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false,
                errorTF:false,
            }
            break;
        case authConstants.LOGOUT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case authConstants.LOGOUT_SUCCESS:
            state = {
                ...initState
            }
            break;
        case authConstants.LOGIN_FAILURE:
            state = {
                ...state,
                errorTF:true,
                error: action.payload.error,
                loading: false,
         
            }
            break;
          
    }

    return state;

}