import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { recipeReducer } from "./recipeReducer";

export const rootReducer = combineReducers({ 
    counterReducer, 
    recipeReducer
})