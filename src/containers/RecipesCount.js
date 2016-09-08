import { connect } from 'react-redux'

import RecipesCount from '../components/RecipesCount'
import { unreadRecipesCount } from '../modules/recipes';

const mapStateToProps = state => {
    return {
        unreadRecipes: unreadRecipesCount(state.recipes)
    }
}

export default connect(
    mapStateToProps,
    null
)(RecipesCount);
