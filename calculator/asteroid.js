const axios = require(`axios`)

const square = (num) => Math.pow(num, 2)

// fetches data from API, filtering by palermo scale and date of first potential impact
// returns Promise
function getAsteroidData (params) {
  function isAsteroidWithinRange (asteroid) {
    return parseInt(asteroid.date.slice(0, 4), 10) <= params.maxDate
  }
  const url = `https://ssd-api.jpl.nasa.gov/sentry.api?all=1&ps-min=${params.minPalermoScale}`
  return axios.get(url)
    .then(response => {
      console.log('Successfully fetched data from sentry API')
      const asteroids = response.data.data
      return asteroids.filter(isAsteroidWithinRange)
    })
    .catch(error => console.log(error))
}

// returns asteroid apocalypse score in range 0 to 100
// tracked objects with a torino value > 0 are assigned t/10
// tracked objects with a torino value of treated as if 0.1, i.e. 0.01
// apocalypse score is then 100 x the RMS: square root of those sums
function calcApocalypseScore (asteroids) {
  const totalScore = asteroids.reduce((score, asteroid) => {
    const torinoScale = parseInt(asteroid.ts, 10)
    const effectiveTorinoScale = Math.max(torinoScale, 0.1)
    return score + square(effectiveTorinoScale / 10.0)
  }, 0)
  return Math.sqrt(totalScore) * 100
}

module.exports = {
  getAsteroidData,
  calcApocalypseScore
}
