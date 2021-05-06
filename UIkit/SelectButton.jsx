import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 80,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const SelectButton = React.memo((props) => {
  const classes = useStyles();
  return (
    <div>
      <FormControl className={classes.formControl}>
  <InputLabel id="demo-simple-select-helper-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={props.value}
          onChange={props.onChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
      {props.datas.map((data)=> (
        <MenuItem value={data}>{data.toFixed(1)}</MenuItem>
      ))}
        </Select>
      <FormHelperText>{props.description}</FormHelperText>
      </FormControl>
    </div>
  )
})
