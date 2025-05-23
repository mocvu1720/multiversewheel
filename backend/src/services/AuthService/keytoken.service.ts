import { Types } from 'mongoose'
import KeyToken from '~/models/AuthModel/keytoken.model.js'

interface ICreateKeyToken {
  userId: Types.ObjectId
  publicKey: string
  privateKey: string
  refreshToken: string
}

class KeyTokenService {
  static createKeyToken = async ({ userId, publicKey, privateKey, refreshToken }: ICreateKeyToken) => {
    console.log(userId)
    try {
      const filter = { user: userId },
        update = {
          publicKey,
          privateKey,
          refreshTokenUsed: [],
          refreshToken
        },
        options = { upsert: true, new: true }
      const tokens = await KeyToken.findOneAndUpdate(filter, update, options)
      console.log('token:', { tokens })
      return tokens ? tokens.publicKey : null
    } catch (error) {
      return error
    }
  }

  static findByUserId = async (userId: string) => {
    return await KeyToken.findOne({ user: userId })
  }

  static removeKeyById = async (id: string) => {
    return await KeyToken.deleteOne({ _id: id })
  }

  static findByRefreshTokenUsed = async (refreshToken: string) => {
    return await KeyToken.findOne({ refreshTokensUsed: refreshToken }).lean()
  }

  static findByRefreshToken = async (refreshToken: string) => {
    return await KeyToken.findOne({ refreshToken }).lean()
  }

  static deleteKeyById = async (userId: Types.ObjectId) => {
    return await KeyToken.deleteOne({ user: userId })
  }
}

export default KeyTokenService
