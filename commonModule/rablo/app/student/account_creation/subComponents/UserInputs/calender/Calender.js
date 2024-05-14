import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useState } from "react";
import SvgIcon from '@mui/material/SvgIcon';

//redux imports 
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../../../../Redux/studentSlices/StudentAccountCreation";

import './Calender.scss'
const CustomCalender = () => {

  //redux 
  const dispatch = useDispatch();
  const handleDate = (date) =>{
    setValue(date)
    const formattedDate = dayjs(date).format('DD-MM-YYYY');
    dispatch(setUserDetails({ key: "Dob", value: formattedDate }));
   }

  //date
  const [value, setValue] = useState(dayjs("DD - MM - YYYY"));
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year - 18}-${month}-${day}`;
  const minDate = dayjs("1924-01-01");
  const maxDate = dayjs(formattedDate);
  


  const CustomCalendarIcon = (props) => (
    <SvgIcon {...props}>
      <g id="uis:calender">
        <path
          id="Vector"
          d="M2 19.3398C2 21.0398 3.3 22.3398 5 22.3398H19C20.7 22.3398 22 21.0398 22 19.3398V11.3398H2V19.3398ZM19 4.33984H17V3.33984C17 2.73984 16.6 2.33984 16 2.33984C15.4 2.33984 15 2.73984 15 3.33984V4.33984H9V3.33984C9 2.73984 8.6 2.33984 8 2.33984C7.4 2.33984 7 2.73984 7 3.33984V4.33984H5C3.3 4.33984 2 5.63984 2 7.33984V9.33984H22V7.33984C22 5.63984 20.7 4.33984 19 4.33984Z"
          fill="#EC5F70"
        />
      </g>
    </SvgIcon>
  );

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          format={"DD-MM-YYYY"}
          slots={{ openPickerIcon: CustomCalendarIcon }}
          value={value}
          onChange={handleDate}
          minDate={minDate}
          maxDate={maxDate}
          
        />
      </LocalizationProvider>
    </div>
  );
};

export default CustomCalender;
