import { connect } from 'react-redux'

import Calendar from '../components/Calendar'
//import DailyEntry from '../components/DailyEntry'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components.  */
const mapDispatchToProps = {
  //addDailyMood: (c) => addDailyMood(c)
}

const mapStateToProps = (state) => ({ days: state.diary });

export default connect(mapStateToProps, null)(Calendar)
