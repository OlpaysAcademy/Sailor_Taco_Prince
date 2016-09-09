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

export function unreadRecipesCount(recipes) {
  return recipes.filter(recipe => !recipe.isRead).length;
}