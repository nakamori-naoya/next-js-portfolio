import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



const BoxTextInput = (props) => {
  return (
        <TextField
          className={props.css}
          id="filled-full-width"
          label={props.label}
          style={{ margin: 8 }}
          variant="outlined"
          value={props.value}
          placeholder={props.placeholder}
          fullWidth={props.fullWidth}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          onChange={props.onChange}
          autoComplete="off"
        />
  );
}

export default BoxTextInput;

