import { connect } from 'react-redux'

import { addDailyMood } from '../modules/dailyEntry'

import Diary from '../components/Diary'
//import DailyEntry from '../components/DailyEntry'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components.  */
const mapDispatchToProps = (dispatch) =>({
  addDailyMood: (c) => dispatch(addDailyMood(c))
})

/*
const mapDispatchToProps = (dispatch) => {
  return {
    addDailyMood: () => {
      dispatch(addDailyMood()) // how to get value here
    }
  }
}

*/
const mapStateToProps = (state) => ({
  //  counter : state.counter
  // component doesnt need any state here yet
})

export default connect(null, mapDispatchToProps)(Diary)
