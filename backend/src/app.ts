import dotenv from 'dotenv'
import express, { NextFunction, Request, Response } from 'express'
import compression from 'compression'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'

import routers from './routes/index.js'
import { checkOverload } from './helpers/check.connect.js'
import { ErrorResponse, NotFoundError } from './core/error.response.js'

dotenv.config()
const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

import('./dbs/init.mongodb.js')
// checkOverload()

app.use('/api', routers)

app.use((req, res, next) => {
  const error = new NotFoundError()
  error.status = 404
  next(error)
})

app.use((error: ErrorResponse, req: Request, res: Response, next: NextFunction): void => {
  const statusCode = error.status || 500

  res.status(statusCode).json({
    status: 'error',
    code: statusCode,
    stack: error.stack,
    message: error.message || 'Internal Server Error'
  })
})

export default app
