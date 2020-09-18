import "date-fns";
import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { ContextElement } from "../../App";


export default function MaterialUIPickers(props) {
  // The first commit of Material-UI
  const [selectedDate1, setSelectedDate1] = React.useState(
    new Date("2020-08-18T21:11:54")
  );
  const [selectedDate2, setSelectedDate2] = React.useState(
    new Date("2020-08-18T21:11:54")
  );

  const [headerNav, setHeaderNav, date, setDate] =useContext(ContextElement)
  
  
  const handleDateChange = (date) => {
      setSelectedDate1(date);
  };
   const handleDateChange2 = (date) => {
      setSelectedDate2(date);
  };
  let result
 const totalDays = () => {
   let difference = selectedDate2.getTime() - selectedDate1.getTime();
   let msInDay = 1000 * 3600 * 24;
   result = Math.round(difference / msInDay);
  setDate(result);
   
  };
  totalDays();
  
 

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
            value={selectedDate1}
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
export const diffData = () => {
  
};

