import { ObjectId } from "mongodb"
import env from "dotenv"
import { db, dbCollection, getCollection } from "../../db"

env.config()

export default {
  Query: {
    todo: async (_, { id }) => {
      const todos = await getCollection(db.TODO_LIST, dbCollection.TODOS)

      const todo = await todos.findOne({
        _id: ObjectId(id)
      })

      const priorities = await getCollection(
        db.TODO_LIST,
        dbCollection.PRIORITIES
      )
      const priorityCursor = priorities.find()
      const priorityValues = await priorityCursor.toArray()

      const priorityHashTable = Object.assign(
        {},
        ...priorityValues.map(p => ({ [p._id]: { ...p, id: p._id } }))
      )

      return todo
        ? { ...todo, id, priority: priorityHashTable?.[todo.priority] }
        : null
    },
    todos: async () => {
      const todos = await getCollection(db.TODO_LIST, dbCollection.TODOS)
      const todoCursor = todos.find()
      const todoValues = await todoCursor.toArray()

      const priorities = await getCollection(
        db.TODO_LIST,
        dbCollection.PRIORITIES
      )
      const priorityCursor = priorities.find()
      const priorityValues = await priorityCursor.toArray()

      const priorityHashTable = Object.assign(
        {},
        ...priorityValues.map(p => ({ [p._id]: { ...p, id: p._id } }))
      )

      return todoValues.map(v => ({
        ...v,
        id: v._id,
        priority: priorityHashTable?.[v.priority]
      }))
    }
  },
  Mutation: {
    createPriority: async (_, { input }) => {
      console.log(input)
      try {
        const collection = await getCollection(
          db.TODO_LIST,
          dbCollection.PRIORITIES
        )
        const result = await collection.insertOne(input)

        const priority = await collection.findOne({
          _id: ObjectId(result.insertedId)
        })

        return {
          status: "SUCCESS",
          result: { ...priority, id: result.insertedId }
        }
      } catch (err) {
        return { status: "FAILED", message: err.message }
      }
    },
    createTodo: async (_, { input: { priorityId, ...todoValues } }) => {
      try {
        const collection = await getCollection(db.TODO_LIST, dbCollection.TODOS)
        const result = await collection.insertOne({
          ...todoValues,
          priority: ObjectId(priorityId)
        })

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
