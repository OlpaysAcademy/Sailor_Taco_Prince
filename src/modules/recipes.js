import R from 'ramda';

export function addRecipeId(recipes, recipeId) {
  return [
    ...recipes,
    recipeId
  ]
}

export function addRecipe(recipesById, recipe) {
  return {
    ...recipesById,
    [recipe.id]: createRecipe(recipe)
  }
}

export function addIngredient(recipesById, { recipeId, ingredientId }) {
  return {
    ...recipesById,
    [recipeId]: addIngredientToRecipe(recipesById[recipeId], ingredientId)
  }
}

export function readRecipe(recipesById, { id }) {
  return {
    ...recipesById,
    [id]: setProperty(recipesById[id], 'isRead', true)
  }
}

function setProperty(recipe, property, value) {
  return { ...recipe, [property]: value }
}

function addIngredientToRecipe(recipe, ingredientId) {
  return {
    ...recipe,
    ingredients: [...recipe.ingredients, ingredientId]
  };
}

function createRecipe({ id, name }) {
  return {
    id,
    name,
    isRead: false,
    isSelected: false,
    ingredients: []
  };
}

const isRead = recipe => recipe.isRead;
const isUnread = R.complement(isRead);

// use flow to show that recipes is an object, not an array
export const unreadRecipesCount = R.pipe(
    R.filter(isUnread),
    R.values,
    R.length
  );