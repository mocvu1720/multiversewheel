import { model, Schema, Document } from 'mongoose'

const DOCUMENT_NAME = 'Apikey'
const COLLECTION_NAME = 'Apikeys'

export interface IApiKey extends Document {
  key: string
  status: boolean
  permissions: string[]
}

const apiKeySchema = new Schema<IApiKey>(
  {
    key: {
      type: String,
      required: true
    },
    status: {
      type: Boolean,
      required: true
    },
    permissions: {
      type: [String],
      required: true,
      enum: ['0000', '1111', '2222']
    }
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME
  }
)

const ApiKey = model<IApiKey>(DOCUMENT_NAME, apiKeySchema)

export default ApiKey
