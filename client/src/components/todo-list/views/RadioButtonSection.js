import React from "react"
import { Radio } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import { green, yellow, red } from "@material-ui/core/colors"

const RadioButtonSection = ({ priorities, selectedValue, onRadioClick }) => {
  const renderButton = ({ id, title, rank }) => {
    switch (rank) {
      case rank > 80:
        return (
          <>
            <RedRadio
              key={id}
              checked={selectedValue === id}
              onChange={onRadioClick}
              value={id}
              name="radio-button-high"
              inputProps={{ "aria-label": "High" }}
            />
            {title}
          </>
        )
      case rank > 50:
        return (
          <>
            <YellowRadio
              key={id}
              checked={selectedValue === id}
              onChange={onRadioClick}
              value={id}
              name="radio-button-high"
              inputProps={{ "aria-label": "High" }}
            />
            {title}
          </>
        )
      default:
        return (
          <>
            <GreenRadio
              key={id}
              checked={selectedValue === id}
              onChange={onRadioClick}
              value={id}
              name="radio-button-high"
              inputProps={{ "aria-label": "High" }}
            />
            {title}
          </>
        )
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
      }}
    >
      {priorities?.map(priority => renderButton(priority))}
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

export default RadioButtonSection
