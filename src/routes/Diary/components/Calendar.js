import React, {PropTypes} from 'react'
import HappyImage from '../assets/moods/happy.jpg'
import GoodImage from '../assets/moods/good.jpg'
import SadImage from '../assets/moods/sad.jpg'
import OkImage from '../assets/moods/ok.jpg'
import TerribleImage from '../assets/moods/terrible.jpg'

class Calendar extends React.Component {
  render() {
    return (
      <div className="calendar">
        <h3>Calendar</h3>
        {this.props.days.map(day => <div key={day.id}>
          <img src={require(`../assets/moods/${day.mood}.jpg`)} className='emoticon' alt='great'/>
          <span>{day.message}</span>
        </div>)}

      </div>
    )
  }
}

export default Calendar;
