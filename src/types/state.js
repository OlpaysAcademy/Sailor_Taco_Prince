// @flow

export type Ingredient = {
    id: string,
    name: string
};

export type Recipe = {
    id: string,
    name: string,
    isRead: boolean,
    isSelected: boolean,
    ingredients: Ingredient.id[]
};

export type State = {
    ingredientsById: {
        [key: string]: Ingredient
    },
    recipesById: {
        [key: string]: Recipe
    },
    recipes: Recipe.id[],
    shownRecipe: {
        id: Recipe.id
    }
};