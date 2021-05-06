import React from "react"
import Button from "@material-ui/core/Button"
import {makeStyles} from "@material-ui/styles"


const useStyles = makeStyles ({
  "button": {
    backgroundColor: "#003F63",
    color: "white",
    fontSize: 20,
    height: 48,
    width: 256
  }
})

const SimpleDarkButton = (props) => {
     const classes = useStyles();
  return (
  <Button className={classes.button} 
          variant="contained" 
          onClick = {() => props.onClick()} 
          disabled={props.disabled}
          >
      {props.label} 
  </Button>
  )
}
export default SimpleDarkButton;