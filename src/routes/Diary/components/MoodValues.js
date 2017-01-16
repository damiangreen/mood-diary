import React from 'react'

class MoodValues extends React.Component {
  constructor(props) {
    super(props);
    this.moodValueClicked = this.moodValueClicked.bind(this);
  }

  moodValueClicked(event) {
    this.props.moodValueChanged(Number.parseInt(event.target.getAttribute('data-value')))
  }
  render() {
    return ( < div > <span>Pretty Awful</span>
      {
      [...Array(10).keys()].map((_, i) => ++i).map(x => <button key={x} type="button" className={'btn btn-mood-value' + (this.props.moodValue === x
        ? ' btn-mood-value-selected'
        : '')} onClick={this.moodValueClicked} data-value={x}>{x}</button>)
    } < span > Wonderful < /span>
    </div >)
  }
}
export default MoodValues;
