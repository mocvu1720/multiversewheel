import { model, Schema } from 'mongoose'

interface IArcheType {
  name: string
  effect: string
  description: string
  weight: number
  isDuplicate: boolean
  isHave: boolean
}

const archetypeSchema = new Schema<IArcheType>({
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
  isDuplicate: {
    type: Boolean,
    required: true
  },
  isHave: {
    type: Boolean,
    required: true
  }
})

const ArcheType = model<IArcheType>('ArcheType', archetypeSchema)

export default ArcheType
