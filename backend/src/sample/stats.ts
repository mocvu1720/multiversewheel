import dotenv from 'dotenv'
dotenv.config()
import('~/dbs/init.mongodb.js')
import BattleIQ from '~/models/StatsModel/battleiq.model.js'
import Durability from '~/models/StatsModel/durability.model.js'
import IQ from '~/models/StatsModel/iq.model.js'
import MartialArt from '~/models/StatsModel/martialart.model.js'
import Speed from '~/models/StatsModel/speed.model.js'
import Strength from '~/models/StatsModel/strength.model.js'
import WeaponMastery from '~/models/StatsModel/weaponmastery.model.js'

const strengthStats = [
  {
    level: '1',
    name: 'Very Weak'
  },
  {
    level: '2',
    name: 'Weak'
  },
  {
    level: '3',
    name: 'Mid'
  },
  {
    level: '4',
    name: 'Above Average'
  },
  {
    level: '5',
    name: 'Superhuman'
  },
  {
    level: '6',
    name: 'Mighty'
  },
  {
    level: '7',
    name: 'Herculean'
  },
  {
    level: '8',
    name: 'Cosmic'
  },
  {
    level: '9',
    name: 'Universal'
  },
  {
    level: '10',
    name: 'Boundless'
  }
]

const speedStats = [
  {
    level: '1',
    name: 'Snail'
  },
  {
    level: '2',
    name: 'Very Slow'
  },
  {
    level: '3',
    name: 'Slow'
  },
  {
    level: '4',
    name: 'Mid'
  },
  {
    level: '5',
    name: 'Peak-human'
  },
  {
    level: '6',
    name: 'Supersonic'
  },
  {
    level: '7',
    name: 'Lightspeed'
  },
  {
    level: '8',
    name: 'Cosmic'
  },
  {
    level: '9',
    name: 'Universal'
  },
  {
    level: '10',
    name: 'Omnipresent'
  }
]

const IQStats = [
  { name: 'Very Dumb', level: 1 },
  { name: 'Dumb', level: 2 },
  { name: 'Mid', level: 3 },
  { name: 'Above Average', level: 4 },
  { name: 'Clever', level: 5 },
  { name: 'Gifted', level: 6 },
  { name: 'Genius', level: 7 },
  { name: 'Super Genius', level: 8 },
  { name: 'Cosmic', level: 9 },
  { name: 'Omniscient', level: 10 }
]

const BattleIQStats = [
  { name: 'Very Dumb', level: 1 },
  { name: 'Dumb', level: 2 },
  { name: 'Mid', level: 3 },
  { name: 'Above Average', level: 4 },
  { name: 'Clever', level: 5 },
  { name: 'Gifted', level: 6 },
  { name: 'Genius', level: 7 },
  { name: 'Super Genius', level: 8 },
  { name: 'Cosmic', level: 9 },
  { name: 'Omniscient', level: 10 }
]

const DurabilityStats = [
  { name: 'Very Fragile', level: 1 },
  { name: 'Fragile', level: 2 },
  { name: 'Mid', level: 3 },
  { name: 'Above Average', level: 4 },
  { name: 'Superhuman', level: 5 },
  { name: 'Nuclear', level: 6 },
  { name: 'Planetary', level: 7 },
  { name: 'Cosmic', level: 8 },
  { name: 'Universal', level: 9 },
  { name: 'Regenerative', level: 10 }
]

const MartialArtStats = [
  { name: "Can't Fight", level: 1 },
  { name: 'Rookie', level: 2 },
  { name: 'Intermediate', level: 3 },
  { name: 'Elite', level: 4 },
  { name: 'Master', level: 5 },
  { name: 'Champion', level: 6 },
  { name: 'Planetary', level: 7 },
  { name: 'Cosmic', level: 8 },
  { name: 'Universal', level: 9 },
  { name: 'Multiversal', level: 10 }
]

const WeaponMasteryStats = [
  { name: 'Noob', level: 1 },
  { name: 'Novice', level: 2 },
  { name: 'Apprentice', level: 3 },
  { name: 'Adept', level: 4 },
  { name: 'Expert', level: 5 },
  { name: 'Master', level: 6 },
  { name: 'Grand Master', level: 7 },
  { name: 'Cosmic', level: 8 },
  { name: 'Universal', level: 9 },
  { name: 'Transcendent', level: 10 }
]

const addStat = async () => {
  await Strength.deleteMany({})
  await IQ.deleteMany({})
  await Speed.deleteMany({})
  await Durability.deleteMany({})
  await BattleIQ.deleteMany({})
  await MartialArt.deleteMany({})
  await WeaponMastery.deleteMany({})

  await Strength.insertMany(strengthStats)
  await IQ.insertMany(IQStats)
  await Speed.insertMany(speedStats)
  await Durability.insertMany(DurabilityStats)
  await BattleIQ.insertMany(BattleIQStats)
  await MartialArt.insertMany(MartialArtStats)
  await WeaponMastery.insertMany(WeaponMasteryStats)
  console.log('Done')
  process.exit()
}

addStat()
