import React, { useState } from "react"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  TextField,
  Radio
} from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import { green, yellow, red } from "@material-ui/core/colors"
import styled from "styled-components"

const Todo = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState("high")

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = event => {
    setSelectedValue(event.target.value)
  }

  return (
    <>
      <Wrapper>
        <div>2021/01/01</div>
        <div style={{ marginLeft: 10, marginRight: "auto" }}>content</div>
        <div style={{ marginLeft: 10 }}>優先度：高</div>
        <Button style={{ marginLeft: 10 }} onClick={handleClickOpen}>
          <EditIcon />
        </Button>
      </Wrapper>
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
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
          />
          <br />
          <br />
          <TextField
            id="detail"
            label="Detail"
            type="text"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
          />
          <br />
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <RedRadio
              checked={selectedValue === "high"}
              onChange={handleChange}
              value="high"
              name="radio-button-high"
              inputProps={{ "aria-label": "High" }}
            />
            High
            <YellowRadio
              checked={selectedValue === "medium"}
              onChange={handleChange}
              value="medium"
              name="radio-button-medium"
              inputProps={{ "aria-label": "Medium" }}
            />
            Medium
            <GreenRadio
              checked={selectedValue === "low"}
              onChange={handleChange}
              value="low"
              name="radio-button-low"
              inputProps={{ "aria-label": "Low" }}
            />
            Low
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Update
          </Button>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600]
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />)

const YellowRadio = withStyles({
  root: {
    color: yellow[400],
    "&$checked": {
      color: yellow[600]
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />)

const RedRadio = withStyles({
  root: {
    color: red[400],
    "&$checked": {
      color: red[600]
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />)

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

const Wrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 10px 0;
`

export default Todo
