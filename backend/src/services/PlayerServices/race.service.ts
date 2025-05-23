import { SortOrder } from 'mongoose'
import { IRace } from '~/models/PlayerModel/race.model.js'
import race from '~/models/PlayerModel/race.model.js'
import { getSelectData } from '~/utils/index.js'

const createRace = async (payload: IRace) => {
  return await race.create(payload)
}

const updateRace = async (id: string, payload: IRace) => {
  return await race.findOneAndUpdate({ _id: id }, payload, { new: true })
}

const findRaceById = async (id: string) => {
  return await race.findById(id).lean()
}

const deleteRace = async (id: string) => {
  return await race.deleteOne({ _id: id }).lean()
}

const queryRace = async ({ query, limit, skip }: { query: object; limit: number; skip: number }) => {
  return await race.find(query).sort({ createdAt: -1 }).limit(limit).skip(skip).lean().exec()
}

const findAllRaces = async ({
  limit = 10,
  sort = 'ctime',
  page = 1,
  filter = {},
  select
}: {
  limit: number
  sort: string
  page: number
  filter: object
  select: string[]
}) => {
  const skip = (page - 1) * limit
  const sortBy = sort === 'ctime' ? { _id: 'asc' as SortOrder } : { _id: 'desc' as SortOrder }
  console.log(getSelectData(select))
  const races = await race.find(filter).sort(sortBy).limit(limit).skip(skip).select(getSelectData(select)).lean()
  return races
}

export default {
  createRace,
  updateRace,
  findRaceById,
  deleteRace,
  queryRace,
  findAllRaces
}
