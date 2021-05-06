import React from "react"
import Button from "@material-ui/core/Button"



const SimpleButton = (props) => {
  return (
  <Button className={props.button}
          variant="contained" 
          onClick = {() => props.onClick()} 
          >
      {props.label} 
  </Button>
  )
}
export default SimpleButton;