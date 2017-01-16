import DailyEntry from './DailyEntry'
import CalendarContainer from '../containers/CalendarContainer'
import './Diary.scss'

import React, {PropTypes} from 'react'

const Diary = (props) => {
  return (
    <div>
      <CalendarContainer></CalendarContainer>
      <DailyEntry addDailyMood={props.addDailyMood}></DailyEntry>
    </div>
  )
}

export default Diary;
