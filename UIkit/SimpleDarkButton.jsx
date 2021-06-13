import React from "react"
import Button from "@material-ui/core/Button"
import {makeStyles} from "@material-ui/styles"

const SimpleDarkButton = React.memo((props) => {
  return (
  <Button 
    variant="contained" 
    onClick = {() => props.onClick()} 
    disabled={props.disabled}
    className="h-12 w-32 font-serif font-bold text-lg"
  >
    <span className={props.className}>
      {props.label} 
    </span>
  </Button>
  )
})
export default SimpleDarkButton;