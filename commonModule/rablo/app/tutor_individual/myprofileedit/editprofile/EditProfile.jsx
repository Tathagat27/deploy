'use client'
import React, { useState, useRef } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styles from './Profile.module.scss'; // Import SCSS file
import { FaArrowLeft } from "react-icons/fa";
import DropBox from './DropBox';
import BarGraph from '../subComponents/BarGraph/BarGraph';
//import MultipleYes from '../subComponents/MultipleChoice/MultipleYes';
//import MultipleAgeGroup from '../subComponents/MultipleChoice/MultipleAgeGroup';
import AcadEdit from './AcadEdit';
import MapPin from "../../../Images/Images_tutor/map-pin.svg"
import Edit from '../../../Images/Images_tutor/Edit.svg'
import Cross from "../../../Images/Images_tutor/cross.svg"
import Danger from "../../../Images/Images_tutor/danger.svg"
import Dot from "../../../Images/Images_tutor/reddot.svg"
import verifygreen from "../../../Images/Images_tutor/verifygreen.svg"
// import MultipleClass from '../subComponents/MultipleChoice/MultipleClass';
// import MultipleTutor from '../subComponents/MultipleChoice/MultipleTutor';
// import MultipletutGen from '../subComponents/MultipleChoice/MultipletutGen';
// import MUltipleRange from '../subComponents/MultipleChoice/MultipleRange';
// import MultipleAge from '../subComponents/MultipleChoice/MultipleAge';
// import MultipleTime from '../subComponents/MultipleChoice/MultipleTime';
// import EmailPopUp from '../subComponents/Popups/EmailPopUp.jsx'
//import ErrorPopUp from '../subComponents/Popups/ErrorPopUp';
import UpdatedPopUp from '../subComponents/Popups/UpdatedPopUp';
import VerifyMail from '../subComponents/Popups/VerifyMail';
import MobileVerification from '../subComponents/Popups/MobileVerification';
//import EmailPopUp from '../subComponents/Popups/EmailPopUp';
//import MobileNumber from '../subComponents/Popups/MobileNumber';
import RestrictedPopUp from '../subComponents/Popups/RestrictedPopUp';


const languages = [
  'English',
  'Hindi',
  'Bengali',
  'Marathi',
  'Tamil',
  'Telugu',
  'Malayalam',
  'Gujarati',
  'Urdu',
  'Assamese',
  'Punjabi',
  'Odia',
  'Kannada',
  'Other'
];

const EditProfile = () => {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('basic'); // State to track active tab
  const [change,setChange] = useState(false);
  const [number,setNumber] = useState("8125957345");
  const [isValidNumber, setIsValidNumber] = useState(false);
  const [whatsappNumber,setWhatsappNumber] = useState("");
  const [isValidWhatsappNumber, setIsValidWhatsappNumber] = useState(false);
  const [lszero, setLsZero] = useState({letterSpacing : 0});
  const [plszero, psetLsZero] = useState({});

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const toggleSubject = (subject) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter((s) => s !== subject));
    } else {
      setSelectedSubjects([...selectedSubjects, subject]);
    }
  };

  const [isCrossClicked, setIsCrossClicked] = useState(false);

  const handleCrossClick = () => {
    setIsCrossClicked(!isCrossClicked);
  };

  const validatePhoneNumber = (number) => {
    const regex = /^\d{10}$/;
    return regex.test(number);
  };

  const validateNumber = (number) => {
    const regex = /^(\d)*$/;
    return regex.test(number);
  };

  const validatePhoneNumberMoreDigits = (number) => {
    const regex = /^\d{11,}$/;
    return regex.test(number);
  };

  const handlePhoneNumberChange = (e) => {
    const phoneNumber = e.target.value;
    
    if (validatePhoneNumber(phoneNumber)){
      setNumber(phoneNumber); 
      setIsValidNumber(true); 
      psetLsZero({});
    }else if(validateNumber(phoneNumber) && !validatePhoneNumberMoreDigits(phoneNumber)){
      setNumber(phoneNumber); 
      setIsValidNumber(false);
      psetLsZero({});
    }else if(validateNumber(phoneNumber) && validatePhoneNumberMoreDigits(phoneNumber)){
      setNumber(number); 
      setIsValidNumber(true);
      psetLsZero({});
    }else {
      setIsValidNumber(false);
      if(number){
        psetLsZero({});
      }else {
        psetLsZero({letterSpacing:0}); 
      }
    }
  };

  const handleWhatsappNumberChange = (e) => {
    const WhatsappNumber = e.target.value;
    
    if (validatePhoneNumber(WhatsappNumber)){
      setWhatsappNumber(WhatsappNumber); 
      setIsValidWhatsappNumber(true);
      setLsZero({}); 
    }else if(validateNumber(WhatsappNumber)&& !validatePhoneNumberMoreDigits(WhatsappNumber)){
      setWhatsappNumber(WhatsappNumber); 
      setIsValidWhatsappNumber(false);
      setLsZero({}); 
    }else if(validateNumber(WhatsappNumber) && validatePhoneNumberMoreDigits(WhatsappNumber)){
      setNumber(WhatsappNumber%10000000000); 
      setIsValidNumber(true);
    }else {
      setIsValidWhatsappNumber(false)
      if(whatsappNumber){
        setLsZero({});
      }else {
        setLsZero({letterSpacing:0}); 
      }
       
    }
  };


///// images styleing
  const dangerimgstyles = {
    width: "1.159vw" ,
    height: "auto" ,
    margin: "0.463vh 0.26vw"
  };

  const verifygreenimgstyles = {
    width: "1.25vw" ,
    height: "auto" ,
    margin: "0.277vh 0.3125vw"
  };

  const reddotimgstyles = {
    width: "0.3125vw" ,
    height: "auto" ,
    margin: "0 0 2vh 0"
  };

  return (
    <main className={styles.profile}>
      <h1 onClick={() => router.push('/plans')}>
        <FaArrowLeft 
        width={40} 
        height={40} 
        className='backarrow'
        layout="responsive"
        size="1.6vw"
        />  Edit your Profile</h1>

      <div className={styles.tab}>
        <div className='divgrp'>
        <div
          className={activeTab === 'basic' ? styles.active : ''}
          onClick={() => handleTabClick('basic')}
        >
          Basic info
        </div>
        <div
          className={activeTab === 'academic' ? styles.active : ''}
          onClick={() => handleTabClick('academic')}
        >
          Academic
        </div>
        <div
          className={activeTab === 'preference' ? styles.active : ''}
          onClick={() => handleTabClick('preference')}
        >
          Preference
        </div>
        </div>
      </div>
      
      {activeTab === 'basic' && (
        <div className={styles.formDiv}>
          <div className={styles.form}>
            <div className={`${styles.formGroup} `}>
              <label htmlFor="email">Edit Profile Image</label>
              <DropBox />
            </div>
            <div className={`${styles.formGroup} `}>
              <label htmlFor="email">
                Email
                
                <Image 
                src={Danger} 
                alt="alt" 
                width={22.27} 
                height={20}
                style={dangerimgstyles}
                />
                
              </label>
              <div className={`${styles.inputWithButton} ${styles.email} ${styles.unaccessilble}`}>
                <input type="email" id="emai" className={ `${styles.emailinput} ${styles.unaccessilble}`} placeholder='tutor@gmail.com' />
                <VerifyMail/>
              </div>
            </div>
            <div className={styles.formGroupRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email">
                  Mobile Number
                  <Image 
                  src={Dot} 
                  alt="alt" 
                  width={6} 
                  height={6} 
                  style={reddotimgstyles}
                  />
                <Image 
                src={verifygreen} 
                alt="alt" 
                width={24} 
                height={24}  
                style={verifygreenimgstyles}
                />
                </label>
                <div className={styles.inputWithButton}>
                  <p className="">+91</p>
                  <input
                    type="tel"
                    id="phon"
                    onChange={handlePhoneNumberChange}
                    value={number}
                    className={`${change ? styles.emailinput : styles.emailinp}`}
                    placeholder='Enter Your Number'
                    style={plszero}
                    // style={!number && {letterSpacing : '0'}}
                  />
                  {!change && <button onClick={() => { setNumber(""); setChange(!change);psetLsZero({letterSpacing: 0}) }} className={styles.verifyButton} >Change</button>}
                  {(change && isValidNumber) && <MobileVerification number={number}  /> }
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="whatsapp">WhatsApp Number</label>
                <input 
                type="tel" 
                id="whatsapp" 
                pattern="[0-9]*" 
                placeholder="Enter Your WhatsApp Number" 
                inputmode="numeric"
                value={whatsappNumber}
                onChange={handleWhatsappNumberChange}
                style={lszero}
                />
              </div>
            </div>

          

            {/* <div className={`${styles.formGroup}`}>
              <label htmlFor="address">Current Address</label>
              <div className={styles.inputWithButton}>
                <Image src={MapPin} alt="Image 1" className={styles.inputImage} width={20} height={20}/>
                <input type="tel" placeholder='Pin the Mark or Enter the Addresss' id="currentaddress" />
                <div className="" onClick={handleCrossClick}>
                  <Image src={isCrossClicked ? Edit : Cross} alt="Image 2" className={styles.inputImage} width={20} height={20} />
                </div>
              </div>
            </div> */}
            <div className={`${styles.rowBtn} ${styles.marginB}`}>
              <button className={styles.basicbtn} onClick={() => handleTabClick('academic')}>Next</button>
              <UpdatedPopUp className={styles.savebtn}   />
            </div>
          </div>
        </div>
      )}

      {/* Form for Academic tab */}
      {/* {activeTab === 'academic' && (
        <AcadEdit />
      )} */}

      {/* Form for Academic tab */}
      {activeTab === 'academic' && (
        <RestrictedPopUp closetab = {() => {setActiveTab('basic')}}/>
      )}

      {/* Form for Academic tab */}
      {activeTab === 'preference' && (
        <RestrictedPopUp closetab = {() => {setActiveTab('basic')}}/>
      )}

{/* <ErrorPopUp /> */}
      {/* <ErrorPopUp isOpen={isModalOpen} onClose={closeModal} /> */}
      {/* <EmailPopUp /> */}
                   {/* <UpdatedPopUp /> */}
      {/* <UpdatedPopUp isOpen={isModalOpen} onClose={closeModal} /> */}
      {/* <VerifyMail isOpen={isModalOpen} onClose={closeModal} /> */}
    </main>
  );
};

export default EditProfile;

{/* Form for Preference tab */}
// {activeTab === 'preference' && (
//   <div className={styles.formDiv}>
//     <form className={styles.form}>
//       <h2 className="">Change your Preference</h2>
//       <MultipleClass />
//       <MultipleTime />
//       <MultipleAgeGroup />
//       <div className={styles.formGroup}>
//         <label htmlFor="time" className={styles.prelabel}>4: Which subjects would you like to study?(Choose all if applicable)</label>
//         <div className={styles.container}>
//           <div
//             className={`${styles.subject} ${selectedSubjects.includes('English') && styles.selected
//               }`}
//             onClick={() => toggleSubject('English')}
//           >
//             English
//           </div>
//           <div
//             className={`${styles.subject} ${selectedSubjects.includes('Hindi') && styles.selected
//               }`}
//             onClick={() => toggleSubject('Hindi')}
//           >
//             Hindi
//           </div>
//           <div
//             className={`${styles.subject} ${selectedSubjects.includes('Biology') && styles.selected
//               }`}
//             onClick={() => toggleSubject('Biology')}
//           >
//             Biology
//           </div>
//           <div
//             className={`${styles.subject} ${selectedSubjects.includes('Chemistry') && styles.selected
//               }`}
//             onClick={() => toggleSubject('Chemistry')}
//           >
//             Chemistry
//           </div>
//           <div
//             className={`${styles.subject} ${selectedSubjects.includes('Political Science') && styles.selected
//               }`}
//             onClick={() => toggleSubject('Political Science')}
//           >
//             Political Science
//           </div>
//           <div
//             className={`${styles.subject} ${selectedSubjects.includes('Computer Science') && styles.selected
//               }`}
//             onClick={() => toggleSubject('Computer Science')}
//           >
//             Computer Science
//           </div>
//           <div
//             className={`${styles.subject} ${selectedSubjects.includes('Accountancy') && styles.selected
//               }`}
//             onClick={() => toggleSubject('Accountancy')}
//           >
//             Accountancy
//           </div>
//           <div
//             className={`${styles.subject} ${selectedSubjects.includes('Geography') && styles.selected
//               }`}
//             onClick={() => toggleSubject('Geography')}
//           >
//             Geography
//           </div>
//           <div
//             className={`${styles.subject} ${selectedSubjects.includes('Economics') && styles.selected
//               }`}
//             onClick={() => toggleSubject('Economics')}
//           >
//             Economics
//           </div>
//           <div
//             className={`${styles.subject} ${selectedSubjects.includes('Mathematics') && styles.selected
//               }`}
//             onClick={() => toggleSubject('Mathematics')}
//           >
//             Mathematics
//           </div>
//           <div
//             className={`${styles.subject} ${selectedSubjects.includes('Physical Education') && styles.selected
//               }`}
//             onClick={() => toggleSubject('Physical Education')}
//           >
//             Physical Education
//           </div>
//           <div
//             className={`${styles.subject} ${selectedSubjects.includes('Social Science') && styles.selected
//               }`}
//             onClick={() => toggleSubject('Social Science')}
//           >
//             Social Science
//           </div>
//           <div
//             className={`${styles.subject} ${selectedSubjects.includes('Business') && styles.selected
//               }`}
//             onClick={() => toggleSubject('Business')}
//           >
//             Business
//           </div>
//           <div
//             className={`${styles.subject} ${selectedSubjects.includes('Physics') && styles.selected
//               }`}
//             onClick={() => toggleSubject('Physics')}
//           >
//             Physics
//           </div>
//         </div>
//       </div>
//       <MultipleTutor />
//       <MultipletutGen />
//       <MultipleAge/>
//       <MUltipleRange />
//       <MultipleYes />
//       <div className={styles.formGroup}>
//         <label htmlFor="time" className={styles.prelabel}>10: What budget for your tution fees?</label>
//       </div>
//       <BarGraph />
//       <div className={styles.rowPre}>
//         <button className={styles.backBtn} onClick={() => handleTabClick('academic')}>{'<'} Back</button>
//         <UpdatedPopUp/>
//       </div>
//     </form>
//   </div>
// )}