import { Schema, arrayOf } from 'normalizr';

import type { Ingredient } from './Ingredient';
import ingredient from './ingredient';

type Recipe = {
    name: string,
    ingredients: [Ingredient]
}

const recipe = new Schema('recipes');

recipe.define({
    ingredients: arrayOf(ingredient)
});

export type { Recipe };
export default recipe;