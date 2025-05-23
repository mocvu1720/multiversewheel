import mongoose from 'mongoose'
import config from '../config/config.mongodb.js'

const {
  db: { username, password, host, name }
} = config

const connectString = `mongodb+srv://${username}:${password}@${host}/${name}?retryWrites=true&w=majority&appName=Cluster0`

class Database {
  private static instance: Database
  constructor() {
    this.connect()
  }

  connect(type = 'mongodb') {
    mongoose
      .connect(connectString, {
        maxPoolSize: 50
      })
      .then((_) => {
        console.log('Connect Mongodb Success')
      })
      .catch((err) => console.log('Connect Mongodb Error'))
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database()
    }

    return Database.instance
  }
}

const instanceMongodb = Database.getInstance()

export default instanceMongodb
