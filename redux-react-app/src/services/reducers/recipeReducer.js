const initalState = {
    recipes: JSON.parse(localStorage.getItem('recipes')) || [],
    recipe: null,
    isCreated: false,
    isUpdate: false
}


export const recipeReducer = (state = initalState, action) => {
    switch (action.type) {
        case "Add_Recipe":
            let oldData = [...state.recipes, action.payload];
            localStorage.setItem('recipes', JSON.stringify(oldData));
            return {
                ...state,
                reciepes: [...state.recipes, action.payload],
                isCreated: true
            }

        case "Get_All_Recipe":
            let allRecipes = JSON.parse(localStorage.getItem('recipes')) || []
            return {
                ...state,
                isCreated: false,
                isUpdate: false,
                recipes: allRecipes
            }

        case "Delete_Recipe": 
        let allData = JSON.parse(localStorage.getItem('recipes')) || []
           let deletedRecipes =  allData.filter((data) => data.id != action.payload)
           localStorage.setItem('recipes', JSON.stringify(deletedRecipes));
            return {
                ...state,
                isCreated: false,
                recipes: deletedRecipes
            }

        case "Get_Recipe":
            let allDatas = JSON.parse(localStorage.getItem('recipes')) || []
            let singleRecipe = allDatas.find(data => data.id == action.payload)
            return {
                ...state,
                recipe: singleRecipe
            }

        case "Update_Recipe": 
            let data = JSON.parse(localStorage.getItem('recipes')) || []
            let updatedData = data.map((recipe) => {
                if(recipe.id == action.payload.id){
                    return action.payload
                }else{
                    return recipe
                }
            })
            localStorage.setItem('recipes', JSON.stringify(updatedData));
            return {
                ...state,
                recipe: null,
                isUpdate: true,
                recipes: updatedData
            }

        default:
            return state;
    }
}