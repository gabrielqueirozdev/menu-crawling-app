import { contentType } from '@main/middlewares'
import cors from 'cors'

import express, { Express } from 'express'

export default (app: Express): void => {
  app.use(express.json({ limit: '50mb' }))
  app.use(express.urlencoded({ limit: '50mb', extended: true }))
  app.use((req, res, next) => {
    req.setTimeout(900000, () => {
      res.send(408)
    })
    next()
  })

  app.use(cors())
  app.use(contentType)
}
