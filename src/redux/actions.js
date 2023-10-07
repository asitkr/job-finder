export const login = (userData) => ({
    type: 'LOGIN',
    payload: userData,
});

export const signup = (userData) => {
    return {
        type: 'SIGNUP',
        payload: userData,
    }
};

export const setLoginStatus = (isLoggedIn) => {
    return {
        type: 'SET_LOGIN_STATUS',
        payload: isLoggedIn,
    };
};

export const setLanguage = (language) => {
    return {
        type: 'SET_LANGUAGE',
        payload: language,
    };
};

export const setJobs = (jobData) => {
    return {
        type: 'SET_JOB',
        payload: jobData,
    }
}

export const setSubmitForm = (formData) => {
    return {
        type: 'SUBMIT_FORM',
        payload: formData,
    }
}


export const signupAndStoreToLocalStorage = (userData) => {
    return (dispatch) => {
        dispatch(signup(userData));

        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(userData));
    };
};