import React, { useState } from "react"
import { Button, Card, CardContent, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useHistory } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import { green, yellow, red } from "@material-ui/core/colors"
import Radio from "@material-ui/core/Radio"

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

  const [selectedValue, setSelectedValue] = useState("high")

  const handleChange = event => {
    setSelectedValue(event.target.value)
  }

  const onSaveClick = () => {
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

export default DetailView
