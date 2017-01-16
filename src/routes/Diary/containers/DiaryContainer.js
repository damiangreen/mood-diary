import { connect } from 'react-redux'

import { addDailyMood } from '../modules/dailyEntry'

import Diary from '../components/Diary'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components.  */
const mapDispatchToProps = (dispatch) =>({
  addDailyMood: addDailyMood
})


export default connect(null, {
  addDailyMood
})(Diary)
