import _ from 'lodash'
import { Types } from 'mongoose'

const convertToObjectMongodb = (id: string) => new Types.ObjectId(id)

const getInfoData = ({ fields = [], object = {} }: { fields: string[]; object: object }) => {
  return _.pick(object, fields)
}

const getSelectData = (select: string[] = []) => {
  return Object.fromEntries(select.map((item) => [item, 1]))
}

const unGetSelectData = (select: string[] = []) => {
  return Object.fromEntries(select.map((item) => [item, 0]))
}

function removeUndefinedObject(obj: Record<string, any>): Record<string, any> {
  const cleanedObject: Record<string, any> = {}

  Object.keys(obj).forEach((key) => {
    if (obj[key] !== undefined) {
      cleanedObject[key] = obj[key]
    }
  })

  return cleanedObject
}

const updateNestedObjectParser = (obj: Record<string, any>): Record<string, any> => {
  const final: Record<string, any> = {}

  Object.keys(obj).forEach((k) => {
    if (typeof obj[k] === 'object' && !Array.isArray(obj[k])) {
      const response = updateNestedObjectParser(obj[k])
      Object.keys(response).forEach((a) => {
        final[`${k}.${a}`] = response[a]
      })
    } else {
      final[k] = obj[k]
    }
  })

  return final
}

export {
  convertToObjectMongodb,
  getInfoData,
  getSelectData,
  unGetSelectData,
  removeUndefinedObject,
  updateNestedObjectParser
}
