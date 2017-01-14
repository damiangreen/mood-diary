import React, {PropTypes} from 'react'
import HappyImage from '../assets/moods/happy.jpg'
import GoodImage from '../assets/moods/good.jpg'
import SadImage from '../assets/moods/sad.jpg'
import OkImage from '../assets/moods/ok.jpg'
import TerribleImage from '../assets/moods/terrible.jpg'

//todo how can i make this dynamic?
class DailyEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    }
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.moodClicked = this.moodClicked.bind(this);
  }

  moodClicked(event) {
    //console.log(event.target.alt);
    this.setState({mood: event.target.alt})
  }

  handleMessageChange(event) {
    this.setState({message: event.target.value})
  }

  render() {
    return (
      <div className='daily-entry'>
        <span>What is your mood today?</span>
        <img src={HappyImage} className='emoticon' alt='great' onClick={this.moodClicked}/>
        <img src={GoodImage} className='emoticon' alt='good' onClick={this.moodClicked}/>
        <img src={OkImage} className='emoticon' alt='ok' onClick={this.moodClicked}/>
        <img src={SadImage} className='emoticon' alt='bad' onClick={this.moodClicked}/>
        <img src={TerribleImage} className='emoticon' alt='terrible' onClick={this.moodClicked}/>
        <textarea value={this.state.message} onChange={this.handleMessageChange}/>
        <button className='btn btn-default' onClick={this.props.setDailyMood}>Go</button>
      </div>
    )
  }
}

export default DailyEntry
