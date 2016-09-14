// @flow

import { connect } from 'react-redux'
import { createRecipe } from '../actions'
import CreateRecipe from '../components/CreateRecipe'

const mapDispatchToProps = dispatch => {
    return {
        createRecipe: name => {
            dispatch(createRecipe(name))
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(CreateRecipe);
