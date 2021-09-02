import React, { useState } from "react"
import { Button, Card, CardContent, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useHistory } from "react-router-dom"
import RadioButtonSection from "./RadioButtonSection"

const useStyles = makeStyles({
  root: {
    minWidth: 600,
    maxWidth: 1200,
    marginTop: 30
  }
})

const DetailView = () => {
  const classes = useStyles()
  const history = useHistory()
  const [selectedValue, setSelectedValue] = useState()

  const onRadioClick = event => {
    setSelectedValue(event.target.value)
  }

  const onSaveClick = async () => {
    // TODO: insert or update

    history.goBack()
  }

  const onBackClick = () => {
    history.goBack()
  }

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
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
          <div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
            <Button variant="contained" color="primary" onClick={onSaveClick}>
              Save
            </Button>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginLeft: 10 }}
              onClick={onBackClick}
            >
              Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default DetailView
