import React from 'react'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';


const SelectDateZone = React.memo(({value, onChange}) => {
  return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
          color="secondary" required="true"
          disableToolbar variant="inline"
          inputVariant="filled" className="bg-gray-100" 
          format="MM/dd/yyyy" margin="normal"
          id="date-picker-inline" label="プログラミングを開始した日"
          value={value} onChange={onChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          />
      </MuiPickersUtilsProvider>
  )
})

export default SelectDateZone
