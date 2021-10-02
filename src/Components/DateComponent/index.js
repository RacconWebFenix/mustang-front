import * as React from "react";
import TextField from "@mui/material/TextField";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";


import { StaticDatePicker } from '@material-ui/lab';
import DateFNSUtils from "@material-ui/lab/AdapterDateFns";

export default function DateComponent() {
  const [value, setValue] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={DateFNSUtils}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
