import uuid from 'node-uuid';

export const createRecipe = name => {
    return {
        type: 'CREATE_RECIPE',
        id: uuid.v4(),
        name
    }
}

export const showRecipe = id => {
    return {
        type: 'SHOW_RECIPE',
        id
    }
}