import express from 'express'
import 'jsonwebtoken'
import { IApiKey } from './models/AuthModel/apikey.model.ts'
import { IKeyToken } from './models/AuthModel/keytoken.model.ts'
import { JwtPayload } from 'jsonwebtoken'

enum ItemType {
  NORMAL = 'NORMAL',
  SPECIAL = 'SPECIAL'
}

declare module 'express-serve-static-core' {
  interface Request {
    objKey?: IApiKey
    keyStore?: IKeyToken
    user?: JwtPayload
    refreshToken?: string
  }

  interface Query {
    limit?: number
    sort?: string
    page?: number
    filter?: object
    select?: string[]
  }
}

declare module 'jsonwebtoken' {
  export interface JwtPayload {
    userId?: string
  }
}
