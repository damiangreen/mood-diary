
import DailyEntry from './DailyEntry'
import CalendarContainer from '../containers/CalendarContainer'
import './Diary.scss'
/*
export const Diary = () => (
  <div>
    <h4>Welcome!</h4>
    <Calendar></Calendar>
    <DailyEntry></DailyEntry>
  </div>
)
*/
import React, { PropTypes } from 'react'

class Diary extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
      return (
        <div>
          <h4 >Welcome!</h4>
          <CalendarContainer></CalendarContainer>
          <DailyEntry addDailyMood={this.props.addDailyMood}></DailyEntry>
        </div>
)
  }
}

export default Diary;
