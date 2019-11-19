const teamsReducer = (state = [], action) => {
  switch (action.type) {
    case 'RELOAD':
      return state + 1
    case 'PICK_TEAM':
      return state - 1
    default:
      return state
  }
}
export default teamsReducer
