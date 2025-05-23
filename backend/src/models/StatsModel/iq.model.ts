import { model, Schema } from 'mongoose'

interface IIQ {
  level: number
  name: string
}

const IQSchema = new Schema<IIQ>({
  level: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

const IQ = model<IIQ>('IQ', IQSchema)

export default IQ
