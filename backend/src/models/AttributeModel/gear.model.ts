import { Schema, model } from 'mongoose'

interface IGear {
  name: string
  type: ItemType
  effect: string
  description: string
  Tags: Schema.Types.ObjectId[]
}

const GearSchema = new Schema<IGear>({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['NORMAL', 'SPECIAL'],
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
  Tags: {
    type: [Schema.Types.ObjectId],
    ref: 'Tag',
    required: true
  }
})

const Gear = model<IGear>('Gear', GearSchema)

export default Gear
