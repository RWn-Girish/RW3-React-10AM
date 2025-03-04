


export const addRecipe = (data) => {
    return {
        type: "Add_Recipe",
        payload: data
    }
}
export const updateRecipe = (data) => {
    return {
        type: "Update_Recipe",
        payload: data
    }
}
export const getAllRecipes = () => {
    return {
        type: "Get_All_Recipe",
    }
}
export const deleteRecipe = (id) => {
    return {
        type: "Delete_Recipe",
        payload: id
    }
}
export const getRecipe = (id) => {
    return {
        type: "Get_Recipe",
        payload: id
    }
}
export const loading = () => {
    return {
        type: "Loading",
    }
}

// thunk middleware action (async) => return dispatch with normal action
export const getAllRecipesAsync = () => {
    return (dispatch) => {
        dispatch(loading())

        setTimeout(()=> {
            dispatch(getAllRecipes())
        }, 2000)
    }
}