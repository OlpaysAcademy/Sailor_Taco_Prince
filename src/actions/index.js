export const createRecipe = name => {
    return {
        type: 'CREATE_RECIPE',
        id: Math.random(),
        name
    }
}