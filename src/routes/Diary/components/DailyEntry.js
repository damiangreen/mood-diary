import React, {PropTypes} from 'react'
import Emoticon from './Emoticon'
import MoodValues from './MoodValues'
//todo why do i need to import assets instead of using their urls?
//todo propTypes
class DailyEntry extends React.Component {
  static propTypes = {
    addDailyMood: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      message: '',
      mood: 'ok',
      moodValue: 5
    }
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.moodClicked = this.moodClicked.bind(this);
    this.sendClicked = this.sendClicked.bind(this);
    this.moodValueChanged = this.moodValueChanged.bind(this);

  }
  resetState() {}

  moodClicked(mood) {
    this.setState({mood})
  }

  handleMessageChange(event) {
    this.setState({message: event.target.value})
  }

  moodValueChanged(value) {
    console.log(value);
    this.setState({moodValue: value})
  }

  sendClicked() {
    this.props.addDailyMood({
      ...this.state,
      id: new Date().getTime()
    }); // should i pass the state??
    this.setState({  message: '',
      mood: 'ok',
      moodValue: 5})
  }

  render() {
    const emoticonClassName = 'emoticon'
    return (
      <div className='daily-entry'>
        <div>
          <span>How is your mood today?</span>
          <div>
            <span>Pretty Awful</span>
            <MoodValues moodValueChanged={this.moodValueChanged} moodValue={this.state.moodValue}></MoodValues>
            <span>
              Wonderful</span>
          </div>
          <div>
            <Emoticon value='happy' onClicked={this.moodClicked} mood={this.state.mood}></Emoticon>
            <Emoticon value='good' onClicked={this.moodClicked} mood={this.state.mood}></Emoticon>
            <Emoticon value='ok' onClicked={this.moodClicked} mood={this.state.mood}></Emoticon>
            <Emoticon value='sad' onClicked={this.moodClicked} mood={this.state.mood}></Emoticon>
            <Emoticon value='terrible' onClicked={this.moodClicked} mood={this.state.mood}></Emoticon>
          </div>
        </div>
        <div className="btn-group">
          <textarea className='form-control' value={this.state.message} onChange={this.handleMessageChange} placeholder='Comments'/>
        </div>
        <button className='btn btn-block btn-add-mood' disabled={!this.state.mood} onClick={this.sendClicked}>Add mood</button>
      </div>
    )
  }
}

export default DailyEntry
