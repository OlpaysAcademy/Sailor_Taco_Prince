import { combineReducers } from 'redux'
import recipes from './recipes'

const tacoApp = combineReducers({
  recipes
})

export default tacoApp
