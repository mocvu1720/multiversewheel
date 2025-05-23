import express, { Request } from 'express'
import { apiKey, permission } from '~/auth/checkAuth.js'

import raceRoutes from './PlayerRoutes/race.routes.js'
import expressAsyncHandler from 'express-async-handler'

const router = express.Router()

router.get(
  '/check-health',
  expressAsyncHandler(async (req: Request, res) => {
    res.send('Hello World!')
  })
)

// check apiKey
// router.use(apiKey)

// check permission
// router.use(permission('0000'))

// routes
router.use('/races', raceRoutes)

export default router
