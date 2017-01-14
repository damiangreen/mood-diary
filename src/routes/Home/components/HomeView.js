import React from 'react'
import DailyEntry from './DailyEntry'
import Calendar from './Calendar'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <Calendar></Calendar>
    <DailyEntry></DailyEntry>
  </div>
)

export default HomeView
