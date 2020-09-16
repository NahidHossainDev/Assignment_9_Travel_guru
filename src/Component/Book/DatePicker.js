import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2020-08-18T21:11:54")
  );
  const [selectedDate2, setSelectedDate2] = React.useState(
    new Date("2020-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
   const handleDateChange2 = (date) => {
     setSelectedDate2(date);
   };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container>
        <Grid item xs={6} className="gridContainer">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="From"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </Grid>
        <Grid item xs={6} className="gridContainer">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="To"
            value={selectedDate2}
            onChange={handleDateChange2}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
