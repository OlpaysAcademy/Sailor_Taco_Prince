import React from 'react'
import ReadRecipesCounterContainer from './../containers/ReadRecipesCounterContainer'
import NewRecipeContainer from './../containers/NewRecipeContainer'
import RecipesListContainer from './../containers/RecipesListContainer'
import ReadAllButtonContainer from './../containers/ReadAllButtonContainer'
import UnreadAllButtonContainer from './../containers/UnreadAllButtonContainer'

const navigationStyles = {
    width: 400,
    height: 1300,
    padding: 20,
    background: '#273135',
    color: '#89949B',
}

const Navigation = () => (
    <div className="col-xs-3 text-left" style={navigationStyles}>
        <ReadRecipesCounterContainer />
        <NewRecipeContainer />
        <RecipesListContainer />
        <div className="text-center">
            <ReadAllButtonContainer />
            <UnreadAllButtonContainer />
        </div>
    </div>
)

export default Navigation
