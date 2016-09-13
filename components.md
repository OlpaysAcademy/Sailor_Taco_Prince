App
--- Header (p)
--- Navigation (p)
    --- ReadRecipesCounter (
    --- NewRecipe
    --- ListRecipes
        --- recipes: array { id, name, ingredients, isRead }
        --- onRecipeClick(id: recipe.id)
    --- ReadAllRecipesButton
        --- onClick()
--- IngredientsList
    --- ingredients: array (name)
    --- ReadRecipeButton
        --- onClick(id: recipe.id)

Containers:

Recipes
    - ReadRecipesCounter
    - ListRecipes

Ingredients 
    - IngredientsList

