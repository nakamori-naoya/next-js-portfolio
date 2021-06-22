import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import { CircularProgress} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';


const useStyles = makeStyles((theme) => ({
  searchBar: {
      background: '#FFFFFF',
  },
}));

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const SearchBar = React.memo(({onChange,value,onBlur,label}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]); //デモであれば、映画の配列が入る
  const loading = open && options.length === 0;
  useEffect(() => {
    let active = true;
    if (!loading) {
      return undefined;
    }
    (async () => {
      await sleep(1e3); 
      if (active) {
        setOptions(value)
      }
    })();
    return () => {
      active = false;
    };
  }, [loading, value]);

  //openされていない時は候補が0になる
  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <div className="flex justify-center py-1">
    <Autocomplete
      className="w-80"
      id="asynchronous-demo"
      sx={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option[label] === value.name}
      getOptionLabel={(option) => option[label]
      }
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          onChange={onChange}
          variant="filled"
          className={classes.searchBar}
          value={value}
          onBlur={()=>onBlur(params.inputProps.value)}
          {...params}
          label="キーワードを入力してください"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
              </> 
            ),
          }}
        />
      )}
    />
    </div>
  );
})

export default SearchBar