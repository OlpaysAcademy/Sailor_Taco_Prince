import { connect } from 'react-redux'
import MainContent from '../components/MainContent'

const mapStateToProps = (state) => {
  return {
    isRecipeSelected: state.recipeToShow
  }
}

const MainContentCont= connect(
  mapStateToProps,
  null
)(MainContent)

export default MainContentCont
