import { gql } from "apollo-server"

export default gql`
  type Todo {
    "Todo ID"
    id: ID!
    "備忘日期"
    date: Date!
    "內容"
    comment: String!
    "優先度"
    priority: String!
  }

  "Values to create a todo"
  input TodoCreateInput {
    "備忘日期"
    date: Date!
    "內容"
    comment: String!
    "優先度"
    priority: String!
  }

  "Values to update a todo with a given id"
  input TodoUpdateInput {
    "Todo ID"
    id: ID!
    "備忘日期"
    date: Date
    "內容"
    comment: String
    "優先度"
    priority: String
  }

  type CreateTodoResult {
    status: Status!
    message: String
    result: Todo
  }

  type UpdateTodoResult {
    status: Status!
    message: String
    result: Todo
  }

  type Query {
    "取得單一 TODO"
    todo(id: ID!): Todo
    "取得全部 TODOs"
    todos: [Todo]
  }

  type Mutation {
    createTodo(input: TodoCreateInput!): CreateTodoResult
    updateTodo(input: TodoUpdateInput!): UpdateTodoResult
  }
`
