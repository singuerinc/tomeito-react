import { connect } from 'react-redux'
import TomatoList from './TomatoList'

const mapStateToProps = state => {
  return {
    tomatoes: state.tomatoes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(() => {})
    }
  }
}

const TomatoesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TomatoList)

export default TomatoesContainer
