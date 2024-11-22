import { readdirSync } from 'node:fs'
import { join } from 'node:path'

import { Express, Router } from 'express'

export default (app: Express): void => {
  const router = Router()
  app.use('/', router)
  
  const filesRoute = readdirSync(join(__dirname, '..', 'routes'))
  filesRoute.forEach((file) => {
    if (file.endsWith('.route.ts') || file.endsWith('.route.js')) {
      const route = require(`../routes/${file}`).default
      route(router)
    }
  })
}
