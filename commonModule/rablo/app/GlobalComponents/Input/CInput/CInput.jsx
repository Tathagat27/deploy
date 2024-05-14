"use client"
import {useState} from 'react';

import "./styles/CInput.css";
const CInput = ({setMobileNumber,number})=> {
    const [phoneNumber, setPhoneNumber] = useState(number);

    const handleInputChange = (e) => {
      const value = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
      setPhoneNumber(value.slice(0, 10)); // Limit to 10 digits
      setMobileNumber(phoneNumber);
    };
    return (
        <div className="cinput">
            <div>
                {"+91"}
            </div>
            <input type="number" className="cinput-field" placeholder="__________" 
            value={phoneNumber}
            onChange={handleInputChange}
            pattern="[0-9]*"
            required
            />
        </div>
    );
}
export default CInput;