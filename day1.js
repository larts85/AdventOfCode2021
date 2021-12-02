require('colors')
const { measurements } = require('./puzzle-inputs')

const calculateAugmentedMeasurements = () => {
  let augmentedMeasurements = 0

  return `There are ${`${augmentedMeasurements}`.green} augmented measurements.`
}

const calculateAugmantesMeasurementsSumByThree = () => {
  let augmentedMeasurementsSum = 0
  let previusMeasurementsSum = 0

  return `There are ${
    `${augmentedMeasurementsSum}`.green
  } augmented measurements sums.`
}

module.exports = [
  calculateAugmentedMeasurements,
  calculateAugmantesMeasurementsSumByThree,
]
