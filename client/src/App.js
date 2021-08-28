import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom"
import TodoList from "./components/todo-list"
import Chatroom from "./components/chatroom"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}))

function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Router>
        <Switch>
          <Route path="/todo-list" component={TodoList} />
          <Route path="/chatroom" exact component={Chatroom} />
          <Redirect exact from="/" to="/todo-list" />
        </Switch>
      </Router>
    </div>
  )
}

export default App
