import express from 'express'
import http from 'http'

import setupRoutes from './routes'
import setupMiddlewares from './middlewares'

export const setupApp = (): SetupAppResponse => {
  const app = express()
  const server = http.createServer(app)

  setupMiddlewares(app)
  setupRoutes(app)

  return { server, app }
}