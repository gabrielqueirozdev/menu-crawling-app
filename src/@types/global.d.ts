import http from 'http'
import { Express } from 'express'

declare global {
  export type SetupAppResponse = {
    server: http.Server; 
    app: Express
  }

  export type GetMenuResponse = {
    name: string
    url: string
    menu: Menu[]
  }

  export type Menu = {
    categoryName: string
    items: MenuItem[]
  }

  export type MenuItem = {
    name: string
    value: string
    description?: string
  }
}