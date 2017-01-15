// ------------------------------------
// Constants
// ------------------------------------
export const ADD_DAILY_MOOD = 'ADD_DAILY_MOOD'

// ------------------------------------
// Actions
// ------------------------------------
export function addDailyMood(value) {
  return {
    type: ADD_DAILY_MOOD,
    payload: value
  }
}

export const actions = {
  addDailyMood,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ADD_DAILY_MOOD]: (state, action) => {
    console.log(state.concat(action.payload));
    return state.concat(action.payload) // TODO: push to array ({...state, action.payload})
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []

export default function dailyEntryReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
