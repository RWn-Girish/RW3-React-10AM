export const myReducer = (state, action) => {
    // console.log(state)
    // console.log(action)

    switch (action.type) {
        case "Increment":
            return state = state + 1;
        case "Decrement":
            return state = state - 1;
        case "Reset":
            return state = 0;
    
        default:
            break;
    }
}