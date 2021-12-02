require('colors')

const dailyChallengesNumber = new Array(25)

const consolePrint = (message) => {
  console.log(`\t\t${`-`.red} ${message}`)
}

console.log(`\n\t${`Advent Code 2021`.rainbow}\n`)

for (let i = 0; i < dailyChallengesNumber.length; i++) {
  const dayChallenges = require(`./day${i + 1}.js`)

  if (!dayChallenges[0]()) continue
  console.log('\t', '**'.yellow, `Day ${i + 1}`.cyan, '**'.yellow)

  dayChallenges.forEach((challenge) => consolePrint(challenge()))
}

console.log(`\n`)
