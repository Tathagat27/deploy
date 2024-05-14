import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import Image from 'next/image'
import MobLogo from '../../../../Images/Images_tutor/MobileOtpBlue.svg'
// import Alert from '../../../../Images/Images_tutor/alert.svg'
import './MobileVerification.css'

const MobileVerificationModal = ({number}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [timer, setTimer] = useState(30);
    // const [isValid,setInValid] = useState(false)
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = useRef([]);

    const handleClickOpen = () => {
        // if(!isValidPhoneNumber(number))
        //     return;
        setIsOpen(true);
        setTimer(30);
    };

    const handleClickClose = () => {
        setIsOpen(false);
    };

    const validateNumber = (number) => {
        const regex = /^(\d)*$/;
        return regex.test(number);
      };

    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];
        if(validateNumber(value)){
            newOtp[index] = value;
            setOtp(newOtp);
        }else{
            if(index>0){
                index=index-1;
            }else{
                index=-1;
            }
        }
        if (value && index < otp.length - 1) {
            inputRefs.current[index + 1].focus();
        } else if (!value && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleResendOTP = () => {
        setTimer(30);
    };

    function isValidPhoneNumber(number) {
        const phoneNumberPattern = /^\d{10}$/;
        return phoneNumberPattern.test(number);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [isOpen]);

    useEffect(() => {
        if (timer === 0) {
            setIsOpen(false);
        }
    }, [timer]);

    // useEffect(() => {
    //     if (isValidPhoneNumber(number)) {
    //         setNumber(true);
    //     }
    // });

    return (
        <>
            <button className='main-button' onClick={handleClickOpen}>Verify</button>
            <Modal
                isOpen={isOpen}
                onRequestClose={handleClickClose}
                className="modal"
                overlayClassName="modal-overlay"
            >
                <div className="modal-content">
                    <Image className='logo' src={MobLogo} alt="alt" width={120} height={130} />
                    <h2 className='blue top'>Verify your Mobile Number</h2>
                    <p className='blue'>Verifying your number will give access to more features on</p>
                    <p className='blue'>Rablo. A one time password has been sent to <span className='bold'>+91 {number}</span></p>
                    <div className="otp-input">
                        {otp.map((value, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                value={value}
                                onChange={(e) => handleOtpChange(index, e.target.value)}
                                ref={(input) => (inputRefs.current[index] = input)}
                            />
                        ))}
                    </div>
                    <p className='blue top'>Time Left: 00:{timer < 10 ? `0${timer}` : timer}</p>
                    <div className="modal-actions">
                        <button onClick={handleClickClose}>Verify {`>`}</button>
                    </div>
                    <p onClick={handleResendOTP} className="blue topb">Resend OTP?</p>
                    <p onClick={handleClickClose} className='blue topb'>Entered incorrect number?</p>

                </div>
            </Modal>
        </>
    );
};

export default MobileVerificationModal;
