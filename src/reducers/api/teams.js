import {
  MSG_USERS_LOADING,
  MSG_USERS_LOAD_SUCCESS,
  MSG_USERS_LOAD_FAILURE,
} from '../../actions/api'

const initialState = {
  data: {},
  loading: false,
  error: '',
}

const teamsApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case MSG_USERS_LOADING:
      return { ...state, loading: true, error: '' }
    case MSG_USERS_LOAD_SUCCESS:
      return { ...state, data: action.payload, loading: false }
    case MSG_USERS_LOAD_FAILURE:
      return { ...state, error: action.error, loading: false }
    default:
      return state
  }
}
export default teamsApiReducer
