import axios from 'axios';
import { addDoc, collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';


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
    return async (dispatch) => {
        dispatch(loading())

        try {
            const querySnapshot = await getDocs(collection(db, "recipes"));
            let result = [];
            querySnapshot.forEach((doc) => {
                // console.log(doc.id, " => ", doc.data());
                result.push(doc.data())
              });
              console.log(result);
              dispatch(getAllRecipes(result));
        } catch (error) {
            console.log(error);
        }
    }
}

export const AddRecipeAsync = (data) => {
    return async (dispatch) => {
        dispatch(loading())
        try {
            // const docRef = await addDoc(collection(db, "recipes"), data);        // auto id generate
            const docRef = await setDoc(doc(db, "recipes", data.id), data);
            dispatch(addRecipe())
          } catch (e) {
            console.error("Error adding document: ", e);
          }
          
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