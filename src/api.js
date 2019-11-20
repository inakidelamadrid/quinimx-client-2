const BASE_API_HOST = 'http://localhost:5000'

export const getUrl = path => `${BASE_API_HOST}${path}`

const loadTeams = () => {
  const uri = getUrl('/api/teams')
  return fetch(uri, { method: 'GET' })
}

const loadCurrentMatchWeek = () => {
  const uri = getUrl('/api/matchweeks?current=true')
  return fetch(uri, { method: 'GET' })
}

const loadMatches = weekId => {
  const uri = getUrl(`/api/matchweeks/${weekId}/matches`)
  return fetch(uri, { method: 'GET' })
}

export { loadTeams, loadCurrentMatchWeek, loadMatches }
