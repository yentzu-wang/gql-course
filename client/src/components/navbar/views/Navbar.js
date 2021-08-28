import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { useHistory } from "react-router-dom"

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

const Navbar = () => {
  const history = useHistory()
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = url => {
    if (url) {
      history.push(url)
    }

    setAnchorEl(null)
  }

  const renderTitle = () => {
    switch (history.location.pathname) {
      case "/todo-list":
        return "Todolist"
      case "/chatroom":
        return "Chatroom"
      default:
        return ""
    }
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleClose("/todo-list")}>
            Todo list
          </MenuItem>
          <MenuItem onClick={() => handleClose("/chatroom")}>Chat</MenuItem>
        </Menu>
        <Typography variant="h6" className={classes.title}>
          {renderTitle()}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
