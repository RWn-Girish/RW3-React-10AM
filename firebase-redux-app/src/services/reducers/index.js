import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { recipeReducer } from "./recipeReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({ 
    counterReducer, 
    recipeReducer,
    userReducer
})