import { model, Schema, Document } from 'mongoose'

const DOCUMENT_NAME = 'Race'
const COLLECTION_NAME = 'Races'

export interface IRace extends Document {
  name: string
  trait: string
  weight: number
}

const raceSchema = new Schema<IRace>(
  {
    name: {
      type: String,
      required: true
    },
    trait: {
      type: String,
      required: true
    },
    weight: {
      type: Number,
      required: true,
      default: 0
    }
  },
  {
    collection: COLLECTION_NAME
  }
)

const Race = model<IRace>(DOCUMENT_NAME, raceSchema)

export default Race
