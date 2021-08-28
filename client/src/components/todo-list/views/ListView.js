import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Todo from "./Todo"
import AddButton from "./AddButton"

const useStyles = makeStyles({
  root: {
    minWidth: 600,
    maxWidth: 1200,
    marginTop: 30
  }
})

const ListView = () => {
  const classes = useStyles()

  // TODO: todo-list data binding

  return (
    <>
      <div>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Todo />
            <Todo />
            <Todo />
          </CardContent>
        </Card>
      </div>
      <AddButton />
    </>
  )
}

export default ListView
