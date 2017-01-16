import { connect } from 'react-redux'

import Calendar from '../components/Calendar'

//TODO: why is it state.diaryh
const mapStateToProps = (state) => ({ days: state.diary });

export default connect(mapStateToProps, null)(Calendar)
