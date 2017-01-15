import { connect } from 'react-redux'

import Calendar from '../components/Calendar'
//import DailyEntry from '../components/DailyEntry'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components.  */
const mapDispatchToProps = {
  //addDailyMood: (c) => addDailyMood(c)
}

/*
const mapDispatchToProps = (dispatch) => {
  return {
    addDailyMood: () => {
      dispatch(addDailyMood()) // how to get value here
    }
  }
}

*/

const getItems = state =>{
  console.log('getitems');
  console.log(state.diary);
  return state;
}

const mapStateToProps = (state) => (getItems(state)
)

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
