import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import { DateField } from '@mui/x-date-pickers/DateField';
import { DatePicker, LocalizationProvider, MuiPickersAdapterContext } from '@mui/x-date-pickers';
import { MenuItem, Select } from '@mui/material';
import jala  from '@date-io/jalaali'

export default function Form() {
  const [sex,setsex] = useState("NA");
  const [dateval,setDateval] = useState("NA");
  return (
    <div>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
        />
        <LocalizationProvider dateAdapter={jala}>
        <DatePicker
        disableFuture
          label="Date 0f Birth"
          openTo='year'
          views={['year','month','day']}
          onChange={()=>{setDateval(dateval)}}
          value={dateval}
          format='dd/MM/yyyy'
        />
        </LocalizationProvider>
        {/* <Select
          value={sex}
          label="Sex"
          onChange={(e)=>{setsex(e.target.value)}}
        >
          <MenuItem value='Male' > Male</MenuItem>
          <MenuItem value='Female' > Female</MenuItem>
        </Select> */}
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>
     </Box>
    </div>
  )
}
