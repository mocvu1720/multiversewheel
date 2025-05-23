import { model, Schema } from 'mongoose'

interface IPlayer {
  name: string
  win: number
  lose: number
  isRedemptionArc: boolean
  isDead: boolean
  SubRaceID: Schema.Types.ObjectId
}

const PlayerSchema = new Schema<IPlayer>({
  name: {
    type: String,
    required: true
  },
  win: {
    type: Number,
    required: true
  },
  lose: {
    type: Number,
    required: true
  },
  isRedemptionArc: {
    type: Boolean,
    required: true
  },
  isDead: {
    type: Boolean,
    required: true
  },
  SubRaceID: {
    type: Schema.Types.ObjectId,
    ref: 'SubRace',
    required: true
  }
})

const Player = model<IPlayer>('Player', PlayerSchema)

export default Player
