export function addIngredient(ingredientsById, ingredient) {
  return {
    ...ingredientsById,
    [ingredient.id]: createIngredient(ingredient)
  }
}

function createIngredient({ id, name }) {
  return {
    id,
    name
  };
}