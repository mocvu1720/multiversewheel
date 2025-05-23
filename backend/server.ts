import app from './src/app.js'
import config from './src/config/config.mongodb.js'

const PORT = config.app.port || 3001

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server closed')
    process.exit(0)
  })
})

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Server closed')
    process.exit(0)
  })
})

process.on('uncaughtException', (error) => {
  console.log(error)
  process.exit(1)
})

process.on('unhandledRejection', (error) => {
  console.log(error)
  process.exit(1)
})

process.on('exit', (code) => {
  console.log(`Process exit with code ${code}`)
})
