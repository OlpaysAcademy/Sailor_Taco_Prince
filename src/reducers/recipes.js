const recipes = (state = [], action) => {
    switch (action.type) {
        case 'ADD_RECIPE':
            return [...state, { name: action.name, id: state.length + 1, read: false, ingredients: [] }];
        case 'SELECT':
            return state.map(recipe => {
                if (recipe.id !== action.id) {
                    return recipe;
                }
                return Object.assign({}, recipe, {read: true});
            });
        case 'TOGGLE_READ':
            return state.map(recipe => {
                if (recipe.id !== action.id) {
                    return recipe;
                }
                return Object.assign({}, recipe, {read: !recipe.read});
            });
        case 'MARK_ALL_AS_READ':
            return state.map(recipe => {
                return Object.assign({}, recipe, {read: true});
            });
        case 'MARK_ALL_AS_UNREAD':
            return state.map(recipe => {
                return Object.assign({}, recipe, {read: false});
            });
        case 'ADD_INGREDIENT':
            return state.map(recipe => {
                if (recipe.id !== action.id) {
                    return recipe;
                }
                return Object.assign({}, recipe, {ingredients: [...recipe.ingredients, action.name]});
            });
        default:
            return state;
    }
}

export default recipes;
