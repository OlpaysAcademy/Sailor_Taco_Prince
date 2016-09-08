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