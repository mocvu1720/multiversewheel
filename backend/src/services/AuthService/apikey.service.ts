import ApiKey from '~/models/AuthModel/apikey.model.js'
import crypto from 'crypto'

const findById = async (key: string) => {
  const objKey = await ApiKey.findOne({ key, status: true }).lean()
  return objKey
}

export { findById }
