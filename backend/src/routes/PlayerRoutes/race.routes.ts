import express from 'express'
import asyncHandler from 'express-async-handler'
import raceController from '~/controllers/PlayerController/race.controller.js'

const router = express.Router()

router.post('/', asyncHandler(raceController.createRace))
router.patch('/:raceId', asyncHandler(raceController.updateRace))
router.delete('/:raceId', asyncHandler(raceController.deleteRace))
router.get('/:raceId', asyncHandler(raceController.findRaceById))
router.get('/', asyncHandler(raceController.findAllRaces))

export default router
