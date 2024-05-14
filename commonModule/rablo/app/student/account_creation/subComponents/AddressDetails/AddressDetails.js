import React, { useState,useEffect } from 'react';
import style from '../PersonalDetails/Personal.module.scss';
import addressStyle from './Address.module.scss';
import Referral from '../Referral/Referral';
import DropDown from '../UserInputs/DropDown/DropDownS';

// Redux imports
import { setUserDetails } from '../../../../Redux/studentSlices/StudentAccountCreation';
import { useDispatch , useSelector} from 'react-redux';

const AddressDetails = ({ handleNext }) => {

  const {addressLine1, city, state, pincode} = useSelector((state) => state.StudentAccountCreation)
  const [enableButton,setEnableButton] = useState(false);

  //redux dispatch functions
  const dispatch = useDispatch();
  const handleInputChange = (key, value) => {
    dispatch(setUserDetails({ key: key, value: value }));
  };

   //handling data submission
   const handleSubmission = () =>{
    if( addressLine1 && city && state && pincode ){
      handleNext("AcademicDetails")
    }else{
      alert("Please fill out all required fields.");
    } 
  }
  useEffect(() =>{
    if( addressLine1 && city && state && pincode ){
      setEnableButton(true)
    }
  },[addressLine1, city, state, pincode])

   // <===  PINCODE validation ===>
   const [Pincode, setPincode] = useState('');

   const handlePinCode = (e) => {
     const value = e.target.value;
     if (/^\d{0,6}$/.test(value)) {
       setPincode(value);
     }
    handleInputChange("pincode",value)
   };

  return (
    <div className={style.Wrapper}>
      <div className={addressStyle.Input__Section}>
        <label className={style.label}>House No. and Street /Colony Name</label>
        <input
          className={addressStyle.Input}
          type="text"
          placeholder='Address Line 1'
          maxLength={50}
          onChange={(e) => handleInputChange("addressLine1",e.target.value)}
        />
      </div>

      <div className={style.Input__Section}>
        <div className={style.Input__wrapper}>
          <label className={style.label}>City</label>
          <input
            className={style.Input}
            type="text"
            maxLength={20}
            placeholder='Select your City'
            onChange={(e) => handleInputChange("city",e.target.value)}
          />
        </div>

        <div className={style.Input__wrapper}>
          <label className={style.label} style={{marginBottom:"0.246vw",marginTop:"0.106vw"}}>State</label>
         <DropDown/>
        </div>
      </div>

      <div className={style.Input__Section}>
        <div className={style.Input__wrapper}>
          <label className={style.label}>Pin Code</label>
          <input
            className={addressStyle.Input_Pincode}
            type="number"
            maxLength={6}
            value={Pincode}
            placeholder='Type Your PIN CODE'
            onChange={handlePinCode}
          />
        </div>

        <div className={style.Input__wrapper}>
          <label className={style.label}>Referral Code</label>
          <Referral />
        </div>
      </div>

      <div className={style.Input__Button__Section}>
        <button onClick={() => handleNext('AcademicDetails')} className={style.button}
        style={
          enableButton ?
          {cursor:'pointer'} :
          {cursor:'not-allowed',color:"#666",background: "#ccc"}
        }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AddressDetails;
