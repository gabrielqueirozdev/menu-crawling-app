import { ServerError, UnauthorizedError } from '@presentation/errors'
import { HttpResponse } from '@presentation/protocols'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError()
})

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error
})

export const notFound = (): HttpResponse => ({
  statusCode: 404,
  body: new Error('Not found')
})

export const invalidType = (name?: string): HttpResponse => ({
  statusCode: 406,
  body: `Invalid type ${name}`
})

export const hasExists = (): HttpResponse => ({
  statusCode: 409,
  body: new Error('Id already exists')
})

export const serverError = (error: Error): HttpResponse => {
  console.error(error)

  return {
    statusCode: 500,
    body: new ServerError(error.stack)
  }
}

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null
})