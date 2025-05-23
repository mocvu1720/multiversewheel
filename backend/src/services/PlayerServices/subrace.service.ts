import { SortOrder } from 'mongoose'
import { ISubRace } from '~/models/PlayerModel/subrace.model.js'
import subrace from '~/models/PlayerModel/subrace.model.js'
import { getSelectData } from '~/utils/index.js'

const createSubRace = async (payload: ISubRace) => {
  return await subrace.create(payload)
}

const updateSubRace = async (id: string, payload: ISubRace) => {
  return await subrace.findOneAndUpdate({ _id: id }, payload, { new: true })
}

const findSubRaceById = async (id: string) => {
  return await subrace.findById(id).lean()
}

const deleteSubRace = async (id: string) => {
  return await subrace.deleteOne({ _id: id }).lean()
}

const querySubRace = async ({ query, limit, skip }: { query: object; limit: number; skip: number }) => {
  return await subrace.find(query).sort({ createdAt: -1 }).limit(limit).skip(skip).lean().exec()
}

const findAllSubRaces = async ({
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
  const subraces = await subrace.find(filter).sort(sortBy).limit(limit).skip(skip).select(getSelectData(select)).lean()
  return subraces
}

export default {
  createSubRace,
  updateSubRace,
  findSubRaceById,
  deleteSubRace,
  querySubRace,
  findAllSubRaces
}
