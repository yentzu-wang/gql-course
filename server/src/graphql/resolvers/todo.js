import { ObjectId } from "mongodb"
import env from "dotenv"
import { db, dbCollection, getCollection } from "../../db"

env.config()

export default {
  Query: {
    todo: async (parent, { id }) => {
      const collection = await getCollection(db.TODO_LIST, dbCollection.TODOS)

      const todo = await collection.findOne({
        _id: ObjectId(id)
      })

      return todo ? { ...todo, id } : null
    },
    todos: async () => {
      const collection = await getCollection(db.TODO_LIST, dbCollection.TODOS)
      const todoCursor = collection.find()
      const todoValues = await todoCursor.toArray()

      return todoValues.map(v => ({
        ...v,
        id: v._id
      }))
    }
  },
  Mutation: {
    createTodo: async (
      _,

      { input }
    ) => {
      try {
        const collection = await getCollection(db.TODO_LIST, dbCollection.TODOS)
        const result = await collection.insertOne(input)

        const todo = await collection.findOne({
          _id: ObjectId(result.insertedId)
        })

        return {
          status: "SUCCESS",
          result: { ...todo, id: result.insertedId }
        }
      } catch (err) {
        return { status: "FAILED", message: err.message }
      }
    },
    updateTodo: async (_, { input: { id, ...restArgs } }) => {
      try {
        const collection = await getCollection(db.TODO_LIST, dbCollection.TODOS)

        await collection.updateOne(
          {
            _id: ObjectId(id)
          },
          { $set: { ...restArgs } }
        )

        const todo = await collection.findOne({
          _id: ObjectId(id)
        })

        return {
          status: "SUCCESS",
          result: { ...todo, id }
        }
      } catch (err) {
        return { status: "FAILED", message: err.message }
      }
    }
  }
}
