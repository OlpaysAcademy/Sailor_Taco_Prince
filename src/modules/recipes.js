export function addRecipe(recipes, recipe) {
  return [
    ...recipes,
    createRecipe(recipe)
  ]
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