import env from "dotenv"
import { MongoClient } from "mongodb"

env.config()
const { DB_HOST } = process.env

const client = MongoClient(DB_HOST, {
  useUnifiedTopology: true
})

export default client
