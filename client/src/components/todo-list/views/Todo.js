import React, { useState } from "react"
import { Button } from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit"
import styled from "styled-components"
import DialogWrapper from "./DialogWrapper"

const Todo = () => {
  const [open, setOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState("high")

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onRadioClick = event => {
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
      <DialogWrapper
        open={open}
        handleClose={handleClose}
        selectedValue={selectedValue}
        onRadioClick={onRadioClick}
      />
    </>
  )
}

const Wrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 10px 0;
`

export default Todo
