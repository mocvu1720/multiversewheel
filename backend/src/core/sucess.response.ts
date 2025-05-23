import { Response } from 'express'
import { ReasonPhrases, StatusCodes } from '~/utils/httpStatusCode.js'

interface ISuccessResponse {
  message?: string
  statusCode?: number
  reasonPhrases?: string
  metadata: Record<string, any> | {}
  options?: Record<string, any>
}

class SuccessResponse {
  message: string
  status: number
  metadata: Record<string, any>
  options?: Record<string, any>
  constructor({ message, statusCode = StatusCodes.OK, reasonPhrases = ReasonPhrases.OK, metadata }: ISuccessResponse) {
    this.message = !message ? reasonPhrases : message
    this.status = statusCode
    this.metadata = metadata
  }

  send(res: Response, headers: object = {}) {
    return res.status(this.status).json(this)
  }
}

class OK extends SuccessResponse {
  constructor({ message, metadata }: ISuccessResponse) {
    super({ message, metadata })
  }
}

class CREATED extends SuccessResponse {
  constructor({
    options,
    message,
    statusCode = StatusCodes.CREATED,
    reasonPhrases = ReasonPhrases.CREATED,
    metadata
  }: ISuccessResponse) {
    super({ message, statusCode, reasonPhrases, metadata })
    this.options = options
  }
}

export { SuccessResponse, OK, CREATED }
