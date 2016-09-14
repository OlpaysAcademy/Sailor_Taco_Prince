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
    ingredients: string[]
};

export type IngredientsById = { [id: string]: Ingredient };
export type RecipesById = { [id: string]: Recipe };
export type Recipes = [];
export type ShownRecipe = { id: string };

export type State = {
    ingredientsById: IngredientsById,
    recipesById: RecipesById,
    recipes: Recipes,
    shownRecipe: ShownRecipe
};

export type OnSelectedRecipe = (id: string) => void;
export type OnUnselectedRecipe = (id: string) => void;
