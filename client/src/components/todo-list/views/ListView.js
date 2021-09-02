import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { gql, useQuery } from "@apollo/client"
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
  const { loading, data } = useQuery(ListView.query.todos)

  console.log(data)

  if (loading) {
    return <div>loading...</div>
  }

  return (
    <>
      <div>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            {data?.todos?.map(todo => (
              <Todo key={todo.id} data={todo} />
            ))}
          </CardContent>
        </Card>
      </div>
      <AddButton />
    </>
  )
}

ListView.query = {
  todos: gql`
    query Todos {
      todos {
        id
        date
        comment
        priority {
          id
          title
          rank
        }
      }
    }
  `
}

export default ListView
