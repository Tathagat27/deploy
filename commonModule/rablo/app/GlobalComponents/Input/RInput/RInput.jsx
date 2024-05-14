import {useState} from 'react'
import './styles/RInput.css'
import DropBox from './subComponents/DropBox/DropBox'
import Gender from './subComponents/Gender/Gender'
import Referral from './subComponents/Referral/Referral'
import DropDown from './subComponents/DropDown/DropDown'
import dayjs from 'dayjs';
import { DateCalendar } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SvgIcon from '@mui/material/SvgIcon';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from '../../../Redux/tutorSlices/AccountCreation';
import { AccordionBody } from 'react-bootstrap'


const RInput = ({label,placeHolder,type,pattern,StateName}) => {

  const dispatch = useDispatch();
  

  const handleInputChange = (key, value) => {
    dispatch(setUserDetails({ key: key, value: value }));
  };


const CustomCalendarIcon = (props) => (
  <SvgIcon {...props}>
    <g id="uis:calender">
      <path id="Vector" d="M2 19.3398C2 21.0398 3.3 22.3398 5 22.3398H19C20.7 22.3398 22 21.0398 22 19.3398V11.3398H2V19.3398ZM19 4.33984H17V3.33984C17 2.73984 16.6 2.33984 16 2.33984C15.4 2.33984 15 2.73984 15 3.33984V4.33984H9V3.33984C9 2.73984 8.6 2.33984 8 2.33984C7.4 2.33984 7 2.73984 7 3.33984V4.33984H5C3.3 4.33984 2 5.63984 2 7.33984V9.33984H22V7.33984C22 5.63984 20.7 4.33984 19 4.33984Z" fill="#6764FF" />
    </g>
  </SvgIcon>
);

  // <===  PINCODE validation ===>
  const [Pincode, setPincode] = useState('');

  const handlePinCode = (e) => {
    const value = e.target.value;
    if (/^\d{0,6}$/.test(value)) {
      setPincode(value);
    }
    handleInputChange("pincode",value);
  };

   // <===  Mobile Number validation ===>
  const [PhoneNumber, setPhoneNumber] = useState();

  const handleNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setPhoneNumber(value)
      dispatch(setUserDetails({ key: "mobileNumber", value: value }));
    }
  };

   // <===  Date related FUnctions and State ===>

   const [value, setValue] = useState(dayjs('DD - MM - YYYY'));
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0'); 
    const formattedDate = `${year-18}-${month}-${day}`;
    const minDate = dayjs('1924-01-01');
    const maxDate = dayjs(formattedDate);

   const handleDate = (date) =>{
    setValue(date)
    const formattedDate = dayjs(date).format('DD-MM-YYYY');
    dispatch(setUserDetails({ key: "dob", value: formattedDate }));
   }

  return (
    <>
       <p className='Label'>
  {label} 
  { type != "referral" &&
  <svg
    width="6"
    height="6"
    viewBox="0 0 6 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ verticalAlign: 'text-top' }} // Adjust the vertical-align property
  >
    <circle
      id="Ellipse_270"
      cx="3.2"
      cy="2.7"
      r="3"
      transform="matrix(-1 0 0 1 6 0)"
      fill="#EC3737"
    />
  </svg>
  }
</p>


        {type === 'file' ? 
        <DropBox />
        : 
        type === 'gender' ?
        <Gender/>
        :
        type === 'date' ?
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            
              <DatePicker 
                format = {"DD-MM-YYYY"}
                slots={{ openPickerIcon: CustomCalendarIcon }}
                value={value}
                onChange={handleDate}
                minDate={minDate}
                maxDate={maxDate}
                />
                
        </LocalizationProvider>
        :
        type === 'referral' ?
        <Referral/>
        :
        type === 'dropdownState' ?
        <DropDown/>
        :
        type === 'number' ?
        <div className='Tutor_mob_num'>
        <label className='mob_num'>+91</label>
        <input 
          className='Num_Input_Field' 
          style={{letterSpacing: '0.2vw'}} 
          placeholder={placeHolder} 
          type='number'
          max="11"
          value={PhoneNumber}
          onChange={handleNumberChange}
        /> 
        </div>
        :
        type === 'pincode' ?
        <input className='Input_Field_Pincode' onChange={handlePinCode}  value={Pincode} 
        placeholder={placeHolder} 
        />
        :
        <input className='Input_Field' type={type} placeholder={placeHolder} pattern={pattern}
        onChange={(e) => handleInputChange(StateName, e.target.value)}
        /> 
        }
         
    </>
  )
}

export default RInput