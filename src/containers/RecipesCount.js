import { connect } from 'react-redux'

import RecipesCount from '../components/RecipesCount'
import { unreadRecipesCount } from '../modules/recipes';

const mapStateToProps = ({ recipesById }) => {
    return {
        unreadRecipes: unreadRecipesCount(recipesById)
    }
}

export default connect(
    mapStateToProps,
    null
)(RecipesCount);
