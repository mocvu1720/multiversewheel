type TDBConfig = {
  app: {
    port: number
  }
  db: {
    username: string
    password: string
    host: string
    name: string
  }
}

const dev: TDBConfig = {
  app: {
    port: parseInt(process.env.DEV_APP_PORT || '3001')
  },
  db: {
    username: process.env.DB_USER as string,
    password: process.env.DB_PASS as string,
    host: process.env.DB_HOST as string,
    name: (process.env.DEV_DB_NAME as string) || 'shopDev'
  }
}

const pro: TDBConfig = {
  app: {
    port: parseInt(process.env.PROD_APP_PORT || '3000')
  },
  db: {
    username: process.env.DB_USER as string,
    password: process.env.DB_PASS as string,
    host: process.env.DB_HOST as string,
    name: process.env.PROD_DB_NAME || 'shopPro'
  }
}

const config = { dev, pro }
const env = (process.env.NODE_ENV || 'dev') as keyof typeof config

export default config[env]
