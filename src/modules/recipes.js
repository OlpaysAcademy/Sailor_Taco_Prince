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
    [id]: read(recipesById[id])
  }
}

export function unreadRecipe(recipesById, { id }) {
  return {
    ...recipesById,
    [id]: unread(recipesById[id])
  }
}

export function selectRecipe(recipesById, { id }) {
  return {
    ...recipesById,
    [id]: setProperty(recipesById[id], 'isSelected', true)
  }
}

export function unselectRecipe(recipesById, { id }) {
  return {
    ...recipesById,
    [id]: setProperty(recipesById[id], 'isSelected', false)
  }
}

function read(recipe) {
  return setProperty(recipe, 'isRead', true);
}

function unread(recipe) {
  return setProperty(recipe, 'isRead', false);
}

export function readSelectedRecipes(recipes) {
  return R.mapObjIndexed(recipe => recipe.isSelected ? read(recipe) : recipe, recipes);
}

export function unreadSelectedRecipes(recipes) {
  return R.mapObjIndexed(recipe => recipe.isSelected ? unread(recipe) : recipe, recipes);
}

export function selectAllRecipes(recipes) {
  return R.mapObjIndexed(recipe => setSelected(recipe), recipes);
}

export function unselectAllRecipes(recipes) {
  return R.mapObjIndexed(recipe => setUnselected(recipe), recipes);
}

function setSelected(recipe) {
  return setProperty(recipe, 'isSelected', true);
}

function setUnselected(recipe) {
  return setProperty(recipe, 'isSelected', false);
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