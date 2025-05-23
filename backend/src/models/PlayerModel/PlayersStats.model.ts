import { model, Schema } from 'mongoose'

interface IPlayerStats {
  playerID: Schema.Types.ObjectId
  Strength: number
  Speed: number
  IQ: number
  Durability: number
  MartialArt: number
  WeaponMastery: number
  ArcheTypesID: Schema.Types.ObjectId[]
  CharDevID: Schema.Types.ObjectId
  WeaponsID: Schema.Types.ObjectId[]
  GearsID: Schema.Types.ObjectId[]
  PowersID: Schema.Types.ObjectId[]
}

const PlayerStatsSchema = new Schema<IPlayerStats>({
  playerID: {
    type: Schema.Types.ObjectId,
    ref: 'Player',
    required: true
  },
  Strength: {
    type: Number,
    required: true
  },
  Speed: {
    type: Number,
    required: true
  },
  IQ: {
    type: Number,
    required: true
  },
  Durability: {
    type: Number,
    required: true
  },
  MartialArt: {
    type: Number,
    required: true
  },
  WeaponMastery: {
    type: Number,
    required: true
  },
  ArcheTypesID: {
    type: [Schema.Types.ObjectId],
    ref: 'ArcheType',
    required: true
  },
  CharDevID: {
    type: Schema.Types.ObjectId,
    ref: 'CharDev',
    required: true
  },
  WeaponsID: {
    type: [Schema.Types.ObjectId],
    ref: 'Weapon',
    required: true
  },
  GearsID: {
    type: [Schema.Types.ObjectId],
    ref: 'Gear',
    required: true
  },
  PowersID: {
    type: [Schema.Types.ObjectId],
    ref: 'Power',
    required: true
  }
})

const PlayerStats = model<IPlayerStats>('PlayerStats', PlayerStatsSchema)

export default PlayerStats
