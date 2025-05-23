import { NextFunction, Request, Response } from 'express'
import { findById } from '~/services/AuthService/apikey.service.js'

const HEADER = {
  API_KEY: 'x-api-key',
  AUTHORIZATION: 'authorization'
}

const apiKey = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const key = req.headers[HEADER.API_KEY]?.toString()

    if (!key) {
      res.status(403).json({ message: 'Forbidden Error' })
      return
    }

    const objectKey = await findById(key)

    if (!objectKey) {
      res.status(403).json({ message: 'Forbidden Error' })
      return
    }

    req.objKey = objectKey
    next()
  } catch (error) {
    res.status(403).json({ message: 'Forbidden Error' })
  }
}

const permission = (permission: string) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.objKey?.permissions) {
      res.status(403).json({ message: 'Permission Denied' })
      return
    }

    console.log('permission: ', req.objKey?.permissions)
    const validPermission = req.objKey?.permissions.includes(permission)

    if (!validPermission) {
      res.status(403).json({ message: 'Permission Denied' })
      return
    }

    return next()
  }
}

export { apiKey, permission }
