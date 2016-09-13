import { connect } from 'react-redux'
import { unreadAllRecipes } from '../actions'
import UnreadAllButton from '../components/UnreadAllButton'

const mapDispatchToProps = (dispatch) => {
  return {
    onMarkAllAsUnread: () => {
      dispatch(unreadAllRecipes())
    }
  }
}

const MarkAllRecipesAsUnread = connect(
    null,
    mapDispatchToProps
)(UnreadAllButton)

export default MarkAllRecipesAsUnread
