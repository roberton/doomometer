const asteroid = require('./asteroid.js')

describe('calcApocalypseScore returns correct score', () => {
  test('for one object with Torino Scale of zero', () => {
    const testScores = [
      { ts: '0' }
    ]
    expect(asteroid.calcApocalypseScore(testScores)).toBe(1)
  })

  test('for three objects with Torino Scale of zero', () => {
    const testScores = [
      { ts: '0' },
      { ts: '0' },
      { ts: '0' }
    ]
    expect(asteroid.calcApocalypseScore(testScores)).toBeCloseTo(1.73)
  })

  test('for one object with Torino Scale of 1', () => {
    const testScores = [
      { ts: '1' }
    ]
    expect(asteroid.calcApocalypseScore(testScores)).toBeCloseTo(10)
  })

  test('for one object with Torino Scale of 10', () => {
    const testScores = [
      { ts: '10' }
    ]
    expect(asteroid.calcApocalypseScore(testScores)).toBeCloseTo(100)
  })

  test('for one object with Torino Scale of 1 and another with 4', () => {
    const testScores = [
      { ts: '1' },
      { ts: '4' }
    ]
    expect(asteroid.calcApocalypseScore(testScores)).toBeCloseTo(41.23)
  })
})
