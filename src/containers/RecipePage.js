import { connect } from 'react-redux'

import RecipePage from '../components/RecipePage'

const mapStateToProps = state => {
    return {
        shownRecipe: state.shownRecipe,
        recipesById: state.recipesById
    }
}

export default connect(
    mapStateToProps,
    null
)(RecipePage);
