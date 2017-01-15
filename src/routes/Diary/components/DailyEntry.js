import React, {PropTypes} from 'react'

//todo why do i need to import assets instead of using their urls?
//todo propTypes
class DailyEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      mood: ''
    }
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.moodClicked = this.moodClicked.bind(this);
    this.sendClicked = this.sendClicked.bind(this);
  }

  moodClicked(mood) {
    console.log(mood);
    this.setState({mood: mood})
  }

  handleMessageChange(event) {
    this.setState({message: event.target.value})
  }

  sendClicked() {
    this.props.addDailyMood({
      ...this.state,
      id: new Date().getTime()
    }); // should i pass the state??
    this.setState({mood: '', message: ''})
  }

  render() {
    const emoticonClassName = 'emoticon'
    return (
      <div className='daily-entry'>
        <span>What is your mood today?</span>
        <Emoticon value='happy' onClicked={this.moodClicked} mood={this.state.mood}></Emoticon>
        <Emoticon value='good' onClicked={this.moodClicked} mood={this.state.mood}></Emoticon>
        <Emoticon value='ok' onClicked={this.moodClicked} mood={this.state.mood}></Emoticon>
        <Emoticon value='sad' onClicked={this.moodClicked} mood={this.state.mood}></Emoticon>
        <Emoticon value='terrible' onClicked={this.moodClicked} mood={this.state.mood}></Emoticon>
        <div className="btn-group">
          <textarea className='form-control' value={this.state.message} onChange={this.handleMessageChange}/>
          <button className='btn btn-default' disabled={!this.state.mood} onClick={this.sendClicked}>Go</button>
        </div>
      </div>
    )
  }
}

export default DailyEntry

  const Emoticon = (props) =>{

    const className =`emoticon ${ (props.mood === props.value
      ? 'disabled'
      : '')}`
    return (<img src={require(`../assets/moods/${props.value}.jpg`)} className={className} alt={props.value} onClick={() => props.onClicked(props.value)}/>)
}

//export default Emoticon;
