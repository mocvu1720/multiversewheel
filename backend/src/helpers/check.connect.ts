import mongoose from 'mongoose'
import os from 'os'

const _SECONDS = 5000

const countConnect = () => {
  const numConnection = mongoose.connections.length
  console.log(`Number of connections: ${numConnection}`)
}

const checkOverload = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length
    const numCores = os.cpus().length
    const memoryUsage = process.memoryUsage().rss
    const maxConnection = numCores * 5

    console.log(`Activate connections: ${numConnection}`)
    console.log(`MEMORY USAGE: ${Math.trunc(memoryUsage / 1024 / 1024)} MB`)

    if (numConnection > maxConnection) {
      console.log(`Connection Overload detected`)
    }
  }, _SECONDS)
}

export { countConnect, checkOverload }
