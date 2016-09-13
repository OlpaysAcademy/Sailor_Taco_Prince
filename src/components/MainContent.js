import React from 'react'
import IngredientsListContainer from './../containers/IngredientsListContainer'
import NewIngredientContainer from './../containers/NewIngredientContainer'
import SelectRecipeMsg from './SelectRecipeMsg'
import ReadRecipeButtonContainer from './../containers/ReadRecipeButtonContainer'

const MainContent = ({ isRecipeSelected }) => (
    <div>
         { isRecipeSelected
             ? <div className="row">
                    <div className="col-xs-4 text-center">
                        <IngredientsListContainer />
                    </div>
                    <div className="col-xs-3 text-center">
                        <NewIngredientContainer />
                        <ReadRecipeButtonContainer />
                    </div>
               </div>
            : <SelectRecipeMsg />
         }
    </div>
)

export default MainContent
