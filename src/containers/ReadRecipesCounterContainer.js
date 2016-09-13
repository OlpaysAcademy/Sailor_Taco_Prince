import { connect } from 'react-redux'
import { toggleRecipe } from '../actions'
import ReadRecipesCounter from '../components/ReadRecipesCounter'

function getReadRecipesCounter(recipes) {
    return _.filter(recipes, 'isRead').length;
}

const mapStateToProps = (state) => {
  return {
    counter: getReadRecipesCounter(state.recipes)
  }
}

const ReadRecipes = connect(
  mapStateToProps,
  null
)(ReadRecipesCounter)

export default ReadRecipes
