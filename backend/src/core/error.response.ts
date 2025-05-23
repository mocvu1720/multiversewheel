import { ReasonPhrases, StatusCodes } from '~/utils/httpStatusCode.js'

class ErrorResponse extends Error {
  status: number
  constructor(message: string, status: number) {
    super(message)
    this.status = status
  }
}

class ConflictRequestError extends ErrorResponse {
  constructor(message = ReasonPhrases.CONFLICT, statusCode = StatusCodes.CONFLICT) {
    super(message, statusCode)
  }
}

class BadRequestError extends ErrorResponse {
  constructor(message = ReasonPhrases.FORBIDDEN, statusCode = StatusCodes.FORBIDDEN) {
    super(message, statusCode)
  }
}

class AuthFailureError extends ErrorResponse {
  constructor(message = ReasonPhrases.UNAUTHORIZED, statusCode = StatusCodes.UNAUTHORIZED) {
    super(message, statusCode)
  }
}

class NotFoundError extends ErrorResponse {
  constructor(message = ReasonPhrases.NOT_FOUND, statusCode = StatusCodes.NOT_FOUND) {
    super(message, statusCode)
  }
}

class ForbiddenError extends ErrorResponse {
  constructor(message = ReasonPhrases.FORBIDDEN, statusCode = StatusCodes.FORBIDDEN) {
    super(message, statusCode)
  }
}

export { ErrorResponse, ConflictRequestError, BadRequestError, AuthFailureError, NotFoundError, ForbiddenError }
