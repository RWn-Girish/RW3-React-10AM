import axios from "axios";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export const addRecipe = () => {
  return {
    type: "Add_Recipe",
  };
};
export const updateRecipe = () => {
  return {
    type: "Update_Recipe",
  };
};
export const getAllRecipes = (data) => {
  return {
    type: "Get_All_Recipe",
    payload: data,
  };
};

export const getRecipe = (data) => {
  return {
    type: "Get_Recipe",
    payload: data,
  };
};
export const loading = () => {
  return {
    type: "Loading",
  };
};

// thunk middleware action (async) => return dispatch with normal action
export const getAllRecipesAsync = () => {
  return async (dispatch) => {
    dispatch(loading());

    try {
      const querySnapshot = await getDocs(collection(db, "recipes"));
      let result = [];
      querySnapshot.forEach((doc) => {
        // console.log( "Record => ", doc);
        result.push({...doc.data(), id: doc.id});
      });
      console.log(result);
      dispatch(getAllRecipes(result));
    } catch (error) {
      console.log(error);
    }
  };
};

export const AddRecipeAsync = (data) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const docRef = await addDoc(collection(db, "recipes"), data);        // auto id generate
    //   const docRef = await setDoc(doc(db, "recipes", data.id), data);
      dispatch(addRecipe());
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
};

export const deleteRecipeAsync = (id) => {
  return async(dispatch) => {
    dispatch(loading());
    try {
        let deleteRec = await deleteDoc(doc(db, "recipes", id));
        dispatch(getAllRecipesAsync());
    } catch (error) {
        console.error("Error : ", error);
    }
  };
};

export const getRecipeAsync = (id) => {
  return async(dispatch) => {
    dispatch(loading());
    try {
        let getRecord = await getDoc(doc(db, "recipes", id));
        console.log("Get Record: => ", getRecord);
        if(getRecord){
            dispatch(getRecipe({...getRecord.data(), id: getRecord.id}));
        }
    } catch (error) {
        console.error("Error : ", error);
    }
  };
};

export const updateRecipeAsync = (id, data) => {
  return async(dispatch) => {
    dispatch(loading());
    try {
        let record = await updateDoc(doc(db, "recipes", id), data);
        dispatch(updateRecipe());
    } catch (error) {
        console.error("Error : ", error);
    }
  };
};
