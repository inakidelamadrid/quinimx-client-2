import {
  MSG_CURRENT_MATCHWEEK_LOADING,
  MSG_CURRENT_MATCHWEEK_LOAD_SUCCESS,
  MSG_CURRENT_MATCHWEEK_LOAD_FAIL,
} from '../../actions/api/currentMatchWeek'

const initialState = {
  data: [],
  loading: false,
  error: '',
}

const currentMatchWeekApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case MSG_CURRENT_MATCHWEEK_LOADING:
      return { ...state, loading: true, error: '' }
    case MSG_CURRENT_MATCHWEEK_LOAD_SUCCESS:
      return { ...state, data: action.payload, loading: false }
    case MSG_CURRENT_MATCHWEEK_LOAD_FAIL:
      return { ...state, error: action.error, loading: false }
    default:
      return state
  }
}
export default currentMatchWeekApiReducer
