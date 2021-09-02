import React from "react"
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
import RadioButtonSection from "./RadioButtonSection"

const DialogWrapper = ({ open, handleClose, selectedValue, onRadioClick }) => {
  const classes = useStyles()

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
        {/* TODO: data binding */}
        <RadioButtonSection
          priorities={[]}
          selectedValue={selectedValue}
          onRadioClick={onRadioClick}
        />
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

export default DialogWrapper
