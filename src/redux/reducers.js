const initialState = {
    user: null,
    jobs: [],
    jobDetail: null,
    language: '',
    formData: {},
    error: null,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
            };
        
        case 'SIGNUP':
            return {
                ...state,
                user: action.payload,
            };

        case 'SET_LANGUAGE':
            return {
                ...state,
                language: action.payload,
            };

        case 'SET_JOB':
            return {
                ...state,
                jobs: action.payload
            }
        case 'SUBMIT_FORM':
            return {
                ...state,
                formData: action.payload
            }
        default:
            return state
    }
}

export default rootReducer;
