require('colors')
const { submarineDirections } = require('./puzzle-inputs')


const calculateSubmarinePosition = () => {
  let horizontalPosition = 0
  let depth = 0


  return `The final direction is ${`${horizontalPosition * depth}`.green}.`
}

const calculateEnhancedSubmarinePosition = () => {
  let horizontalPosition = 0
  let depth = 0
  let aim = 0

  return `The final direction is ${`${horizontalPosition * depth}`.green}.`
}

module.exports = [
  calculateSubmarinePosition,
  calculateEnhancedSubmarinePosition,
]
