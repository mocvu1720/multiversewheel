import { NextFunction, Request, Response } from 'express'
import { SuccessResponse } from '~/core/sucess.response.js'
import RaceServices from '~/services/PlayerServices/race.service.js'

class RaceController {
  createRace = async (req: Request, res: Response, next: NextFunction) => {
    new SuccessResponse({
      message: 'Create Race Success',
      metadata: await RaceServices.createRace(req.body)
    }).send(res)
  }

  updateRace = async (req: Request, res: Response, next: NextFunction) => {
    new SuccessResponse({
      message: 'Update Race Success',
      metadata: (await RaceServices.updateRace(req.params.raceId, req.body)) ?? {}
    }).send(res)
  }

  deleteRace = async (req: Request, res: Response, next: NextFunction) => {
    new SuccessResponse({
      message: 'Delete Race Success',
      metadata: await RaceServices.deleteRace(req.params.raceId)
    }).send(res)
  }

  findRaceById = async (req: Request, res: Response, next: NextFunction) => {
    new SuccessResponse({
      message: 'Find Race Success',
      metadata: (await RaceServices.findRaceById(req.params.raceId)) ?? {}
    }).send(res)
  }

  findAllRaces = async (req: Request, res: Response, next: NextFunction) => {
    const { limit, sort, page, filter, select } = req.query

    const parsedQuery = {
      limit: parseInt(limit?.toString() || '10'),
      sort: sort?.toString() || 'ctime',
      page: parseInt(page?.toString() || '1'),
      filter: (filter as object) || {},
      select: (select as string[]) || ['name', 'trait', 'weight']
    }

    new SuccessResponse({
      message: 'Find All Races Success',
      metadata: await RaceServices.findAllRaces(parsedQuery)
    }).send(res)
  }
}

export default new RaceController()
