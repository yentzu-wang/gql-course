import React, { useState } from "react"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  TextField
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { gql, useQuery, useMutation } from "@apollo/client"
import RadioButtonSection from "./RadioButtonSection"
import ListView from "./ListView"

const DialogWrapper = ({ id, open, handleClose, selectedValue }) => {
  const [date, setDate] = useState()
  const [comment, setComment] = useState()
  const [priority, setPriority] = useState()
  const classes = useStyles()

  const { data } = useQuery(DialogWrapper.query.getData, {
    variables: { id },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-and-network"
  })
  const [updateTodo] = useMutation(DialogWrapper.mutation.updateTodo, {
    refetchQueries: [ListView.query.todos, DialogWrapper.query.getData]
  })

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">TODO DETAIL</DialogTitle>
      <DialogContent>
        <TextField
          id="date"
          label="Date"
          type="date"
          value={date || data?.todo?.date}
          onChange={e => setDate(e.target.value)}
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
        />
        <br />
        <br />
        <TextField
          label="Detail"
          type="text"
          defaultValue={comment || data?.todo?.comment}
          onChange={e => setComment(e.target.value)}
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
        />
        <br />
        <br />
        <RadioButtonSection
          priorities={data?.priorities}
          selectedValue={priority || data?.todo?.priority?.id}
          onRadioClick={e => setPriority(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={async () => {
            await updateTodo({
              variables: {
                updateTodoInput: {
                  id,
                  comment,
                  date,
                  priorityId: priority
                }
              }
            })

            handleClose()
            setDate()
            setComment()
            setPriority()
          }}
          color="primary"
        >
          Update
        </Button>
        <Button
          onClick={() => {
            handleClose()
            setDate()
            setComment()
            setPriority()
          }}
          color="secondary"
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

DialogWrapper.query = {
  getData: gql`
    query GetData($id: ID!) {
      todo(id: $id) {
        date
        comment
        priority {
          id
          title
        }
      }
      priorities {
        id
        rank
        title
      }
    }
  `
}

DialogWrapper.mutation = {
  updateTodo: gql`
    mutation UpdateTodoMutation($updateTodoInput: TodoUpdateInput!) {
      updateTodo(input: $updateTodoInput) {
        result {
          id
          comment
        }
      }
    }
  `
}

export default DialogWrapper
