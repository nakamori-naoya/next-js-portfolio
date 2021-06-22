import React from 'react';
import TextField from '@material-ui/core/TextField';

const BoxTextInput = React.memo((props) => {
  return (
        <TextField
          color={props.color}
          className="bg-white font-serif "
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
          required={props.required}
          className="bg-white"
          variant="filled"
          onChange={props.onChange}
          autoComplete="off"
        />
  );
})

export default BoxTextInput;

