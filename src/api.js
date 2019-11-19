const BASE_API_HOST = 'http://localhost:5000'

const getUrl = path => `${BASE_API_HOST}${path}`

const getTeams = () => {
  const uri = getUrl('/teams')
  return fetch(uri, { method: 'GET' })
}

export { getTeams }
