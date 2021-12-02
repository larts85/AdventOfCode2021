require('colors')
const { submarineDirections } = require('./puzzle-inputs')

const extractDirectionValue = (direction = '') => {
  const [, value] = direction.split(' ')
  return Number(value)
}

const calculateSubmarinePosition = () => {
  let horizontalPosition = 0
  let depth = 0

  for (const direction of submarineDirections) {
    switch (true) {
      case /^forward/.test(direction):
        horizontalPosition += extractDirectionValue(direction)
        break

      case /^down/.test(direction):
        depth += extractDirectionValue(direction)
        break

      case /^up/.test(direction):
        depth -= extractDirectionValue(direction)
        break

      default:
        break
    }
  }

  return `The final direction is ${`${horizontalPosition * depth}`.green}.`
}

const calculateEnhancedSubmarinePosition = () => {
  let horizontalPosition = 0
  let depth = 0
  let aim = 0

  for (const direction of submarineDirections) {
    switch (true) {
      case /^forward/.test(direction):
        horizontalPosition += extractDirectionValue(direction)
        depth += aim * extractDirectionValue(direction)
        break

      case /^down/.test(direction):
        aim += extractDirectionValue(direction)
        break

      case /^up/.test(direction):
        aim -= extractDirectionValue(direction)
        break

      default:
        break
    }
  }
  return `The final direction is ${`${horizontalPosition * depth}`.green}.`
}

module.exports = [
  calculateSubmarinePosition,
  calculateEnhancedSubmarinePosition,
]
