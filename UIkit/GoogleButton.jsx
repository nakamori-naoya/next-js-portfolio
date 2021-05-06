import React from "react"
import Button from "@material-ui/core/Button"
import {makeStyles} from "@material-ui/styles"
import { Icon } from "@material-ui/core"
import google from "../assets/img/google.png"

const useStyles = makeStyles ({
  button: {
    color: "#000",
    fontSize: 15,
    height: 48,
    width: 256,
  },
  icon: {
    height: 40,
    width: 40,
  }
})

const GoogleButton = (props) => {
     const classes = useStyles();
  return (
    <label>
      <Button className={classes.button} 
          variant="contained" 
          onClick = {() => props.onClick()} 
          color="secondary"
          >
      <img alt="" src={google} className={classes.icon} />
      {props.label} 
      </Button>
  </label>
  )
}
export default GoogleButton;