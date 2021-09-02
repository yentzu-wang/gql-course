import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import TodoList from "./components/todo-list"
import Chatroom from "./components/chatroom"

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
})

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}))

function App() {
  const classes = useStyles()

  return (
    <ApolloProvider client={client}>
      <div className={classes.root}>
        <Router>
          <Switch>
            <Route path="/todo-list" component={TodoList} />
            <Route path="/chatroom" exact component={Chatroom} />
            <Redirect exact from="/" to="/todo-list" />
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  )
}

export default App
