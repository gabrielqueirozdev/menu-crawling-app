import { Router } from 'express'

import { adaptRoute } from '@main/adapters'
import { GetMenuController } from '@presentation/controllers'
import getMenuValidator from '@presentation/validators/menu/get-menu.validator'

export default (router: Router): void => {
  router.post('/menu', getMenuValidator, adaptRoute(new GetMenuController()))
}