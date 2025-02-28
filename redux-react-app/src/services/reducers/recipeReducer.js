const initalState = {
    recipes: JSON.parse(localStorage.getItem('recipes')) || [],
    recipe: null,
    isCreated: false,
}


export const recipeReducer = (state = initalState, action) => {
    switch (action.type) {
        case "Add_Recipe":
            let oldData = JSON.parse(localStorage.getItem('recipes')) || [];
            oldData.push(action.payload);
            localStorage.setItem('recipes', JSON.stringify(oldData));
            return {
                ...state,
                reciepes : [...state.recipes, action.payload]
            }
    
        default:
            return state;
    }
}