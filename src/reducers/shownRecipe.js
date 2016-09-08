const shownRecipe = (state = { id: null }, action) => {
    switch (action.type) {
        case 'SHOW_RECIPE':
            return { ...state, id: action.id }
        default:
            return state
    }
}

export default shownRecipe
