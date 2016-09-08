const initialState = {
    recipes: []
}

export default function recipes(state = initialState, action) {
    switch (action.type) {
        case 'ADD_RECIPE':
            return Object.assign({}, state, {
                recipes: [
                    ...state.recipes,
                    {
                        id: action.recipe.id,
                        name: action.recipe.name,
                        ingredients: []
                    }
                ]
            })
        case 'ADD_INGREDIENT':
            return Object.assign({}, state, {
                recipes: state.recipes.map(recipe => {
                    if ( recipe.id === action.recipeId ) {
                        Object.assign({}, recipe, {
                            ingredients: [
                                ...recipe.ingredients,
                                action.ingredient
                            ]
                        })
                    }
                    return recipe
                })
            })
        case 'TOGGLE_RECIPE':
            return Object.assign({}, state, {
                recipes: state.recipes.map(recipe => {
                    if ( recipe.id === action.recipeId ) {
                        Object.assign({}, recipe, {
                            isRead: !recipe.isRead
                        })
                    }
                    return recipe
                })
            })
        case 'READ_ALL_RECIPES':
            return Object.assign({}, state, {
                recipes: state.recipes.map(recipe => {
                    Object.assign({}, recipe, {
                        isRead: true
                    })
                    return recipe
                })
            })
        default:
            return state
    }
}
