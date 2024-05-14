'use client'
import { useState, useRef } from 'react';
import './MobileNumber.css'

function MobileNumber() {
    const [phoneNumber, setPhoneNumber] = useState(['', '', '', '', '', '', '', '', '', '']);
    const inputRefs = useRef([]);

    const handlePhoneNumberChange = (index, value) => {
        // Ensure only digits are entered
        const enteredValue = value.replace(/\D/g, '');

        // Update the phone number array
        const updatedPhoneNumber = [...phoneNumber];
        updatedPhoneNumber[index] = enteredValue;
        setPhoneNumber(updatedPhoneNumber);

        // Move focus to the next input if a digit is entered
        if (enteredValue && index < 9 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }

        // Move focus to the previous input if a digit is cleared
        if (!enteredValue && index > 0 && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <div className="phone-input">
            {phoneNumber.map((value, index) => (
                <input
                    key={index}
                    type="tel"
                    maxLength="1"
                    value={value}
                    onChange={(e) => handlePhoneNumberChange(index, e.target.value)}
                    ref={(input) => (inputRefs.current[index] = input)}
                />
            ))}
        </div>
    );
}

export default MobileNumber;
