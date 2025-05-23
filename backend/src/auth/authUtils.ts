import JWT, { JwtPayload } from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import { AuthFailureError, NotFoundError } from '~/core/error.response.js'
import KeyTokenService from '~/services/AuthService/keytoken.service.js'
import { NextFunction, Request, Response } from 'express'

const HEADER = {
  API_KEY: 'x-api-key',
  CLIENT_ID: 'x-client-id',
  AUTHORIZATION: 'authorization',
  REFRESHTOKEN: 'x-rtoken-id'
}

const createTokenPair = async (payload: Record<string, any>, publicKey: string, privateKey: string) => {
  try {
    const accessToken = await JWT.sign(payload, publicKey, {
      expiresIn: '2 days'
    })

    const refreshToken = await JWT.sign(payload, privateKey, {
      expiresIn: '7 days'
    })

    JWT.verify(accessToken, publicKey, (err: any, decoded: any) => {
      if (err) {
        console.log(err)
      } else {
        console.log(decoded)
      }
    })

    return {
      accessToken,
      refreshToken
    }
  } catch (error) {
    console.log(error)
  }
}

const authentication = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.headers[HEADER.CLIENT_ID] as string
  if (!userId) throw new AuthFailureError('Invalid request')

  const keyStore = await KeyTokenService.findByUserId(userId)
  if (!keyStore) throw new NotFoundError('Error: KeyStore not found')

  if (req.headers[HEADER.REFRESHTOKEN]) {
    try {
      const refreshToken = req.headers[HEADER.REFRESHTOKEN] as string
      const decodeUser = (await JWT.verify(refreshToken, keyStore.privateKey)) as JwtPayload
      console.log('decodeUser: ', decodeUser)
      if (userId !== decodeUser.userId) throw new AuthFailureError('Error: Invalid Userid')
      req.keyStore = keyStore
      req.user = decodeUser
      req.refreshToken = refreshToken
      return next()
    } catch (error) {
      throw error
    }
  }

  const accessToken = req.headers[HEADER.AUTHORIZATION] as string
  if (!accessToken) throw new AuthFailureError('Error: Access token not found')

  try {
    const decodeUser = (await JWT.verify(accessToken, keyStore.publicKey)) as JwtPayload
    if (userId !== decodeUser.userId) throw new AuthFailureError('Error: Invalid Userid')
    req.keyStore = keyStore
    req.user = decodeUser
    return next()
  } catch (error) {
    throw error
  }
})

const verifyJWT = async (token: string, keySecret: string) => {
  return await JWT.verify(token, keySecret)
}

export { createTokenPair, authentication, verifyJWT }
