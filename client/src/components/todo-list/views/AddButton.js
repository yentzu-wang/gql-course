import React from "react"
import AddCircleIcon from "@material-ui/icons/AddCircle"
import styled from "styled-components"
import { useHistory } from "react-router-dom"

const AddButton = () => {
  const history = useHistory()

  return (
    <Wrapper>
      <AddCircleIcon
        color="primary"
        fontSize="large"
        onClick={() => history.push("/todo-list/add")}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  right: 40px;
  bottom: 30px;
  cursor: pointer;
`

export default AddButton
