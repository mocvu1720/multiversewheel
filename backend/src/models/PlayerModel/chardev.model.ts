import { model, Schema } from 'mongoose'

interface ICharDev {
  name: string
  effect: string
  description: string
  weight: number
  isDuplicate: boolean
  isHave: boolean
}

const charDevSchema = new Schema<ICharDev>({
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

const CharDev = model<ICharDev>('CharDev', charDevSchema)

export default CharDev
