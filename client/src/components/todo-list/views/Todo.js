import React, { useState } from "react"
import { Button } from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit"
import styled from "styled-components"
import DialogWrapper from "./DialogWrapper"

const Todo = ({ data }) => {
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
        <div>{data?.date}</div>
        <div style={{ marginLeft: 10, marginRight: "auto" }}>
          {data?.content}
        </div>
        <div style={{ marginLeft: 10 }}>優先度：{data?.priority?.title}</div>
        <Button style={{ marginLeft: 10 }} onClick={handleClickOpen}>
          <EditIcon />
        </Button>
      </Wrapper>
      <DialogWrapper
        id={data?.id}
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
