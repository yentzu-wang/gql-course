import express from "express"
import { ApolloServer } from "apollo-server-express"
import env from "dotenv"
import cors from "cors"
import typeDefs from "./graphql/typeDefs"
import resolvers from "./graphql/resolvers"

env.config()
const { NODE_ENV, HOST, PORT } = process.env

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true
  })

  const app = express()
  app.use(cors())

  await server.start()
  server.applyMiddleware({ app })

  console.log(`Start ${NODE_ENV} server`, new Date())

  app.listen(PORT, () => {
    console.log(
      `🚀 Server ready at http://${HOST}:${PORT}${server.graphqlPath}`
    )
  })
}

startApolloServer(typeDefs, resolvers)
