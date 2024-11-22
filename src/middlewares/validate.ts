import { NextFunction, Request, Response } from 'express'
import { ObjectSchema } from 'joi'

export default (
  schema: ObjectSchema,
  type: 'body' | 'query' | 'params' = 'body'
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[type])

    const valid = error === undefined
    if (valid) {
      next()
    } else {
      const { details } = error
      const errorsDetail = details.map((i) => i.message)

      res.status(422).json({ errors: errorsDetail })
    }
  }
}
