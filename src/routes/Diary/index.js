
import { injectReducer } from '../../store/reducers'

export default (store) => ({
path : 'diary',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const DiaryContainer = require('./containers/DiaryContainer').default
      const reducer = require('./modules/dailyEntry').default

      /*  Add the reducer to the store on key 'diary'  */
      injectReducer(store, { key: 'diary', reducer })
      //const CalendarContainer = require('./containers/CalendarContainer').default
    //  const reducer = require('./modules/dailyEntry').default
      /*  Return getComponent   */
      cb(null, DiaryContainer)

    /* Webpack named bundle   */
  }, 'diary')
  }
})
