import React, {PropTypes} from 'react'
import HappyImage from '../assets/moods/happy.jpg'
import GoodImage from '../assets/moods/good.jpg'
import SadImage from '../assets/moods/sad.jpg'
import OkImage from '../assets/moods/ok.jpg'
import TerribleImage from '../assets/moods/terrible.jpg'

//todo why do i need to import assets instead of using their urls?
//todo propTypes
class DailyEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',mood:''
    }
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.moodClicked = this.moodClicked.bind(this);
    this.sendClicked = this.sendClicked.bind(this);
  }

  moodClicked(event) {
    this.setState({mood: event.target.alt})
  }

  handleMessageChange(event) {
    this.setState({message: event.target.value})
  }

  sendClicked(){
    console.log(this.state);
    this.props.addDailyMood(this.state); // should i pass the state??
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
        <button className='btn btn-default' onClick={this.sendClicked}>Go</button>
      </div>
    )
  }
}

export default DailyEntry
