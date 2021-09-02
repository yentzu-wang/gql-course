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
    priority: Priority!
  }

  type Priority {
    id: ID!
    title: String!
    rank: Int!
  }

  "Values to create a todo"
  input TodoCreateInput {
    "備忘日期"
    date: Date!
    "內容"
    comment: String!
    "優先度"
    priorityId: ID!
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

  "Values to create a priority option"
  input PriorityCreateInput {
    "Title"
    title: String!
    "優先等級"
    rank: Int!
  }

  type CreateTodoResult {
    "Request status"
    status: Status!
    "Error message"
    message: String
    "Result"
    result: Todo
  }

  type UpdateTodoResult {
    "Request status"
    status: Status!
    "Error message"
    message: String
    "Result"
    result: Todo
  }

  type CreatePriorityResult {
    "Request status"
    status: Status!
    "Error message"
    message: String
    "Result"
    result: Priority
  }

  type Query {
    "取得單一 TODO"
    todo(id: ID!): Todo
    "取得全部 TODOs"
    todos: [Todo]
    "取得優先度選項"
    priorities: [Priority]
  }

  type Mutation {
    "建立待辦"
    createTodo(input: TodoCreateInput!): CreateTodoResult
    "更新待辦"
    updateTodo(input: TodoUpdateInput!): UpdateTodoResult
    "建立優先度選項"
    createPriority(input: PriorityCreateInput!): CreatePriorityResult
  }
`
