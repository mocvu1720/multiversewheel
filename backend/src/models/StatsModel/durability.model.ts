import { Schema, model } from 'mongoose'

interface IDurability {
  level: number
  name: string
}

const DurabilitySchema = new Schema<IDurability>({
  level: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

const Durability = model<IDurability>('Durability', DurabilitySchema)

export default Durability
