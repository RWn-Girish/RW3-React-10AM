import axios from 'axios';


export const addRecipe = () => {
    return {
        type: "Add_Recipe",
    }
}
export const updateRecipe = () => {
    return {
        type: "Update_Recipe",
    }
}
export const getAllRecipes = (data) => {
    return {
        type: "Get_All_Recipe",
        payload: data
    }
}


export const getRecipe = (data) => {
    return {
        type: "Get_Recipe",
        payload: data
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

        axios.get('http://localhost:3000/recipes').then((res) => {
            console.log("Response: ", res.data);
            dispatch(getAllRecipes(res.data));
        }).catch((err) => {
            console.log(err);
        })
    }
}

export const AddRecipeAsync = (data) => {
    return (dispatch) => {
        dispatch(loading())
        axios.post('http://localhost:3000/recipes', data).
            then((res) => {
                dispatch(addRecipe());
            }).catch((err) => {
                console.log(err);
            })
    }
}

export const deleteRecipeAsync = (id) => {
    return (dispatch) => {
        dispatch(loading())
        axios.delete(`http://localhost:3000/recipes/${id}`).
            then((res) => {
                dispatch(getAllRecipesAsync());
            }).catch((err) => {
                console.log(err);
            })
    }
}

export const getRecipeAsync = (id) => {
    return (dispatch) => {
        dispatch(loading())
        axios.get(`http://localhost:3000/recipes/${id}`).
            then((res) => {
                console.log(res.data);
                dispatch(getRecipe(res.data));
            }).catch((err) => {
                console.log(err);
            })
    }
}

export const updateRecipeAsync = (id, data) => {
    return (dispatch) => {
        dispatch(loading())
        axios.put(`http://localhost:3000/recipes/${id}`, data).
            then((res) => {
                dispatch(updateRecipe());
            }).catch((err) => {
                console.log(err);
            })
    }
}