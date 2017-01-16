import React, {PropTypes} from 'react'
const Emoticon = (props) => {

  const className = `emoticon ${ (props.mood === props.value
    ? ''
    : 'disabled')}`
  return (<img src={require(`../assets/moods/${props.value}.jpg`)} className={className} alt={props.value} onClick={() => props.onClicked(props.value)}/>)
}

Emoticon. propTypes = {
  mood: React.PropTypes.string.isRequired,
  value:PropTypes.string.isRequired,
};

export default Emoticon;
