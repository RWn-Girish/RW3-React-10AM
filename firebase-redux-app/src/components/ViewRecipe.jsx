import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeAsync } from "../services/actions/recipe.action";

const ViewRecipe = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { recipe } = useSelector((state) => state.recipeReducer);
  useEffect(() => {
    if(id){
        dispatch(getRecipeAsync(id))
    }
}, [id]);
  return (
  <>
    {recipe ? <>
        <h2>{recipe.title}</h2>
    <h3>{recipe.category}</h3>
    <p>{recipe.instructions}</p>
    <p>{recipe.ingredients}</p>
    </>: ""}
  </>
);
};

export default ViewRecipe;
