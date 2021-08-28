import React from "react"
import styled from "styled-components"
import { Route, Switch } from "react-router-dom"
import ListView from "./ListView"
import DetailView from "./DetailView"
import Navbar from "../../navbar"

const TodoList = () => {
  return (
    <div>
      <Navbar />
      <CardWrapper>
        <Switch>
          <Route path="/todo-list" exact component={ListView} />
          <Route path="/todo-list/add" component={DetailView} />
        </Switch>
      </CardWrapper>
    </div>
  )
}

const CardWrapper = styled.div`
  min-height: calc(100vh - 64px);

  display: flex;
  flex-direction: row;
  justify-content: center;

  position: relative;
`

export default TodoList
