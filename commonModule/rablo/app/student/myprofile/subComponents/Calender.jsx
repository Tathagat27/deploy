'use client'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useState } from 'react'

const CustomCalender = () => {
  const [value, setValue] = useState(dayjs('DD - MM - YYYY'));
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const formattedDate = `${year - 18}-${month}-${day}`;
  const minDate = dayjs('1924-01-01');
  const maxDate = dayjs(formattedDate);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        format={"DD-MM-YYYY"}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        minDate={minDate}
        maxDate={maxDate}
      />

    </LocalizationProvider>
  )

}

export default CustomCalender;
