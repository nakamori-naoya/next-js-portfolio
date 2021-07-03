import React from 'react';
import TextField from '@material-ui/core/TextField';

const BoxTextInput = React.memo((props) => {
  return (
        <TextField
          className="bg-white font-serif"
          id="filled-full-width"
          label={props.label}
          variant="outlined"
          value={props.value}
          placeholder={props.placeholder}
          fullWidth={props.fullWidth}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          required={props.required}
          variant="filled"
          onChange={props.onChange}
          autoComplete="off"
          multiline={props.multiline}
        />
  );
})

export default BoxTextInput;

