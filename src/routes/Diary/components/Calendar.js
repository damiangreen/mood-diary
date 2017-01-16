import React, {PropTypes} from 'react'
import {FormattedDate, IntlProvider} from 'react-intl';
const Calendar = (props) => {

  const items = props.days.length === 0
    ? <div className='calendar-entry'><span>No items</span></div>
    : props.days.map(day => <div key={day.id} className='calendar-entry'>
      <div className='date'>
        <FormattedDate value={new Date(day.id)}></FormattedDate>
      </div>
      <img src={require(`../assets/moods/${day.mood}.jpg`)} className='emoticon' alt='{day.mood}'/>
      <div>
        <span>{day.message}</span>
      </div>
    </div>)

  return (
    <div>
      <IntlProvider locale="en-gb">
        <div className="calendar">
          {items}
        </div>
      </IntlProvider>
    </div>
  )
}

export default Calendar;
