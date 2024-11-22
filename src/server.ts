import 'module-alias/register'

import { setupApp } from '@main/config/app'

const { server } = setupApp()

const PORT = 3000

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
