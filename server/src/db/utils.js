import client from "./client"

export const getCollection = async (dbName, collectionName) => {
  if (!client?.topology) {
    await client.connect()
  }

  return client.db(dbName).collection(collectionName)
}
