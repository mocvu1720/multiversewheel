import { model, Schema } from 'mongoose'

export interface ISubRace {
  name: string
  effect: string
  description: string
  weight: number
  raceID: Schema.Types.ObjectId
}

const subRaceSchema = new Schema<ISubRace>({
  name: {
    type: String,
    required: true
  },
  effect: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  raceID: {
    type: Schema.Types.ObjectId,
    ref: 'Race',
    required: true
  }
})

const SubRace = model<ISubRace>('SubRace', subRaceSchema)

export default SubRace
