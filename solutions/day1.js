require('colors')
const { measurements } = require('../puzzle-inputs')

const calculateAugmentedMeasurements = () => {
  let augmentedMeasurements = 0

  for (let i = 1; i < measurements.length; i++) {
    const currentMeasurement = measurements[i]
    const previusMeasurement = measurements[i - 1]
    if (currentMeasurement > previusMeasurement) {
      augmentedMeasurements += 1
    }
  }

  return `There are ${`${augmentedMeasurements}`.green} augmented measurements.`
}

const calculateAugmantesMeasurementsSumByThree = () => {
  let augmentedMeasurementsSum = 0
  let previusMeasurementsSum = 0

  for (let i = 2; i < measurements.length; i++) {
    const currentMeasurementsSum =
      measurements[i] + measurements[i - 1] + measurements[i - 2]
    if (
      previusMeasurementsSum &&
      previusMeasurementsSum < currentMeasurementsSum
    ) {
      augmentedMeasurementsSum += 1
    }
    previusMeasurementsSum = currentMeasurementsSum
  }
  return `There are ${
    `${augmentedMeasurementsSum}`.green
  } augmented measurements sums.`
}

module.exports = [
  calculateAugmentedMeasurements,
  calculateAugmantesMeasurementsSumByThree,
]
