import { model, Schema } from 'mongoose'

const DOCUMENT_NAME = 'Key'
const COLLECTION_NAME = 'Keys'

export interface IKeyToken extends Document {
  user: Schema.Types.ObjectId
  privateKey: string
  publicKey: string
  refreshTokenUsed?: string[]
  refreshToken: string
}

const keyTOkenSchema = new Schema<IKeyToken>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    privateKey: {
      type: String,
      required: true
    },
    publicKey: {
      type: String,
      required: true
    },
    refreshTokenUsed: {
      type: [String],
      required: true
    },
    refreshToken: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME
  }
)

const KeyToken = model<IKeyToken>(DOCUMENT_NAME, keyTOkenSchema)

export default KeyToken
