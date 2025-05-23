import { model, Schema } from 'mongoose'

interface IMartialArt {
  level: number
  name: string
}

const MartialArtSchema = new Schema<IMartialArt>({
  level: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

const MartialArt = model<IMartialArt>('MartialArt', MartialArtSchema)

export default MartialArt
