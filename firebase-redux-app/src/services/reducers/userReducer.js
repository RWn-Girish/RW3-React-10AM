const initalState = {
    user: null,
    isCreated: false,
    error: null,
    isLoading: false
}


export const userReducer = (state = initalState, action) => {
    switch (action.type) {
        case "SIGNUP_SUCCESS":
            return {
                ...state,
                isCreated: true
            }
        case "SIGNUP_REJECT":
            return {
                ...state,
                error: action.payload
            }


        case "Loading":
            return {
                ...state,
                isLoading: true
            }
        default:
            return state;
    }
}