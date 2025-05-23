import { Schema, model } from 'mongoose'

interface IStrength {
  level: number
  name: string
}
const StrengthSchema = new Schema<IStrength>({
  level: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

const Strength = model<IStrength>('Strength', StrengthSchema)

export default Strength
