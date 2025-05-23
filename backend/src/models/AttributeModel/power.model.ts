import { Schema, model } from 'mongoose'

interface IPower {
  name: string
  effect: string
  description: string
  tags: Schema.Types.ObjectId[]
}

const PowerSchema = new Schema<IPower>({
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
  tags: {
    type: [Schema.Types.ObjectId],
    ref: 'Tag',
    required: true
  }
})

const Power = model<IPower>('Power', PowerSchema)

export default Power
