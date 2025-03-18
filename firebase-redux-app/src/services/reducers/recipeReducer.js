const initalState = {
    recipes: [],
    recipe: null,
    isCreated: false,
    isUpdate: false,
    isLoading: false
}


export const recipeReducer = (state = initalState, action) => {
    switch (action.type) {
        case "Add_Recipe":
            return {
                ...state,
                isCreated: true
            }

        case "Get_All_Recipe":
            return {
                ...state,
                isCreated: false,
                isUpdate: false,
                recipes: action.payload,
                isLoading: false
            }

        
        case "Get_Recipe":
            
            return {
                ...state,
                recipe: action.payload
            }

        case "Update_Recipe":
            return {
                ...state,
                recipe: null,
                isUpdate: true,
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