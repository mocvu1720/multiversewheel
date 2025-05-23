import { ObjectId, Schema } from 'mongoose'

interface IBloodTaste {
  subraceID: ObjectId
  effect: string
}

const bloodTasteSchema = new Schema<IBloodTaste>({
  subraceID: {
    type: Schema.Types.ObjectId,
    ref: 'SubRace',
    required: true
  },
  effect: {
    type: String,
    required: true
  }
})
