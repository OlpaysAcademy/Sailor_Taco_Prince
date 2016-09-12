const selectedRecipe = (state = null, action) => {
    switch (action.type) {
        case 'SELECT':
            return action.id;
        default:
            return state;
    }
}

export default selectedRecipe;
