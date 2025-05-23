import { Schema, model } from 'mongoose'

interface ISpeed {
  level: number
  name: string
}

const SpeedSchema = new Schema<ISpeed>({
  level: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

const Speed = model<ISpeed>('Speed', SpeedSchema)

export default Speed
