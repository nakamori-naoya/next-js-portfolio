import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';



export default function TextInputWithIcon(props) {

  return (
        <Grid container spacing={1} alignItems="flex-end" className="pb-3">
          <Grid item>
            <AccountCircle fontSize="large"/>
          </Grid>
          <Grid item>
            <TextField 
            id="input-with-icon-grid" 
            multiline={props.multiline}
            label={props.label}
            rows={props.rows}
            rowsMax={props.rowsMax}
            onChange={props.onChange}
            value={props.value}
            />
          </Grid>
        </Grid>

  );
}
