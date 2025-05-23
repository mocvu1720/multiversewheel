import { Schema, model } from 'mongoose'

interface IBattleIQ {
  level: number
  name: string
}

const BattleIQSchema = new Schema<IBattleIQ>({
  level: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

const BattleIQ = model<IBattleIQ>('BattleIQ', BattleIQSchema)

export default BattleIQ
