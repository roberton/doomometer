const asteroid = require('./asteroid.js')
// const data = require('./exampleData/all.json').data
const moment = require(`moment`)

const calcMaxDate = (currentYear) => currentYear + 50 // set threshold as 50 years from now
const maxDate = calcMaxDate(moment().year())

asteroid.getAsteroidData({ minPalermoScale: -4, maxDate })
  .then(asteroids => {
    console.log(`Number of asteroids of interest: ${asteroids.length}`)
    console.log(`Current Asteroid Apocalypse score is ${asteroid.calcApocalypseScore(asteroids)}`)
  })
