import R from 'ramda'
import { connect } from 'react-redux'

import { markAllAsRead, showRecipe, addRecipe, removeRecipe } from '../actions/recipes'
import DumbRecipeList from '../components/DumbRecipeList';

const mapStateToProps = (state) => {
    return {
        recipes: R.values(state.recipes.entities),
    }
}

const mapDispatchToProps = (dispatch) => ({
    onRecipeClick: (id: string) => dispatch(showRecipe(id)),
    onNewRecipeSubmit: (name: string) => {
        if (!name) { return; }
        dispatch(addRecipe({ name, ingredients: [] }))
    },
    onRecipeDelete: (id: string) => dispatch(removeRecipe(id)),
    onRecipeSelect: (id: string) => dispatch(showRecipe(id)),
    onMarkAllAsRead: (read: boolean) => dispatch(markAllAsRead(read))
})

const RecipeList = connect(
    mapStateToProps,
    mapDispatchToProps
)(DumbRecipeList)

export default RecipeList