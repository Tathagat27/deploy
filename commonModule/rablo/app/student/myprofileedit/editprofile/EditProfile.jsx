'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styles from './Profile.module.scss'; // Import SCSS file
import { FaArrowLeft } from "react-icons/fa";
import DropBox from './DropBox';
import BarGraph from '../subComponents/BarGraph/BarGraph';
import MultipleYes from '../subComponents/MultipleChoice/MultipleYes';
import MultipleAgeGroup from '../subComponents/MultipleChoice/MultipleAgeGroup';
import AcadEdit from './AcadEdit';
import MapPin from "../../../Images/Images_student/map-pin.svg"
import Edit from '../../../Images/Images_student/Edit.svg'
import Cross from "../../../Images/Images_student/cross.svg"
import MultipleClass from '../subComponents/MultipleChoice/MultipleClass';
import MultipleTutor from '../subComponents/MultipleChoice/MultipleTutor';
import MultipletutGen from '../subComponents/MultipleChoice/MultipletutGen';
import MUltipleRange from '../subComponents/MultipleChoice/MultipleRange';
import MultipleAge from '../subComponents/MultipleChoice/MultipleAge';
import MultipleTime from '../subComponents/MultipleChoice/MultipleTime';
// import EmailPopUp from '../subComponents/Popups/EmailPopUp.jsx'
import ErrorPopUp from '../subComponents/Popups/ErrorPopUp';
import UpdatedPopUp from '../subComponents/Popups/UpdatedPopUp';
import VerifyMail from '../subComponents/Popups/VerifyMail';
import MobileVerification from '../subComponents/Popups/MobileVerification';
import EmailPopUp from '../subComponents/Popups/EmailPopUp';
import MobileNumber from '../subComponents/Popups/MobileNumber';
import { useDispatch, useSelector } from 'react-redux';
import { setDataMyProfile } from '../../../Redux/studentSlices/MyProfile';

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
  const dispatch = useDispatch();
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('basic'); // State to track active tab
  const [change,setChange] = useState(false);
  const myProfileData = useSelector(state => state.MyProfile.data);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [guardianMobNumber, setGuardianMobNumber] = useState('');
  const [addressLine1, setAddress] = useState('');

  useEffect(() => {
    // console.log(myProfileData);
    setAddress(myProfileData.addressLine1)
    setEmail(myProfileData.email)
    setPhoneNumber(myProfileData.phoneNumber)
    setGuardianMobNumber(myProfileData.guardianMobNumber)
  }, [myProfileData]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const setBasic = () => {
    setActiveTab('basic')
  }

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
    if(!isCrossClicked){
      setAddress('')
    }else{
      setAddress(myProfileData.addressLine1)
    }
    setIsCrossClicked(!isCrossClicked);
  };

  return (
    <main className={styles.profile}>
      <h1 className={styles.title} onClick={() => router.push('/student/myprofile')}><FaArrowLeft />  Edit your Profile</h1>

      <div className={styles.tab}>
        <div
          className={activeTab === 'basic' ? styles.active : ''}
          onClick={() => handleTabClick('basic')}
        >
          Basic
        </div>
        <div
          className={activeTab === 'academic' ? styles.active : ''}
          onClick={() => handleTabClick('academic')}
        >
          Academic
        </div>
        {/* <div
          className={activeTab === 'preference' ? styles.active : ''}
          onClick={() => handleTabClick('preference')}
        >
          Preference
        </div> */}
      </div>
      
      {activeTab === 'basic' && (
        <div className={styles.formDiv}>
          <div className={styles.form}>
            <div className={`${styles.formGroup} `}>
              <label htmlFor="email">Edit Profile Image</label>
              <DropBox />
            </div>
            <div className={`${styles.formGroup} `}>
              <label htmlFor="email">Email</label>
              <div className={`${styles.inputWithButton} ${styles.email}`}>
                <input
                  type="email"
                  id="emai"
                  className={styles.emailinput}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder='student@gmail.com'
                />
              </div>
            </div>
            <div className={styles.formGroupRow}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">Mobile Number</label>
                <div className={styles.inputWithButton}>
                  <h4 className="">+91</h4>
                  <input
                    type="tel"
                    id="phon"
                    onChange={(e)=>{setPhoneNumber(e.target.value)}}
                    value={phoneNumber}
                    className={styles.emailinp}
                    placeholder='Enter Your Number'
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
              <label htmlFor="whatsapp">Guardian&apos;s Number</label>
                <input className={styles.input} type="tel" id="whatsapp" onChange={(e)=>setGuardianMobNumber(e.target.value)} value={guardianMobNumber} placeholder="Enter Guardian's Number" />
              </div>
            </div>  
            <div className={`${styles.formGroup}`}>
              <label htmlFor="address">Current Address</label>
              <div className={styles.inputWithButton}>
                <Image src={MapPin} alt="Image 1" className={styles.inputImage} width={20} height={20}/>
                <input type="text" placeholder='Pin the Mark or Enter the Addresss' id="currentaddress" value={addressLine1} onChange={(e)=>{setAddress(e.target.value)}} />
                <div className="" onClick={handleCrossClick}>
                  <Image src={isCrossClicked ? Edit : Cross} alt="Image 2" className={styles.inputImage} width={20} height={20} />
                </div>
              </div>
            </div>
            <div className={`${styles.rowBtn} ${styles.marginB}`}>
              <button className={styles.basicbtn} onClick={() => handleTabClick('academic')}>Next</button>
              <UpdatedPopUp email={email}
                phoneNumber={phoneNumber}
                addressLine1={addressLine1}
                guardianMobNumber={guardianMobNumber} />
            </div>
          </div>
        </div>
      )}

      {/* Form for Academic tab */}
      {activeTab === 'academic' && (
        <AcadEdit setBasic={setBasic} />
      )}

      {/* Form for Preference tab */}
      {activeTab === 'preference' && (
        <div className={styles.formDiv}>
          <form className={styles.form}>
            <h2 className="">Change your Preference</h2>
            <MultipleClass />
            <MultipleTime />
            <MultipleAgeGroup />
            <div className={styles.formGroup}>
              <label htmlFor="time" className={styles.prelabel}>4: Which subjects would you like to study?(Choose all if applicable)</label>
              <div className={styles.container}>
                <div
                  className={`${styles.subject} ${selectedSubjects.includes('English') && styles.selected
                    }`}
                  onClick={() => toggleSubject('English')}
                >
                  English
                </div>
                <div
                  className={`${styles.subject} ${selectedSubjects.includes('Hindi') && styles.selected
                    }`}
                  onClick={() => toggleSubject('Hindi')}
                >
                  Hindi
                </div>
                <div
                  className={`${styles.subject} ${selectedSubjects.includes('Biology') && styles.selected
                    }`}
                  onClick={() => toggleSubject('Biology')}
                >
                  Biology
                </div>
                <div
                  className={`${styles.subject} ${selectedSubjects.includes('Chemistry') && styles.selected
                    }`}
                  onClick={() => toggleSubject('Chemistry')}
                >
                  Chemistry
                </div>
                <div
                  className={`${styles.subject} ${selectedSubjects.includes('Political Science') && styles.selected
                    }`}
                  onClick={() => toggleSubject('Political Science')}
                >
                  Political Science
                </div>
                <div
                  className={`${styles.subject} ${selectedSubjects.includes('Computer Science') && styles.selected
                    }`}
                  onClick={() => toggleSubject('Computer Science')}
                >
                  Computer Science
                </div>
                <div
                  className={`${styles.subject} ${selectedSubjects.includes('Accountancy') && styles.selected
                    }`}
                  onClick={() => toggleSubject('Accountancy')}
                >
                  Accountancy
                </div>
                <div
                  className={`${styles.subject} ${selectedSubjects.includes('Geography') && styles.selected
                    }`}
                  onClick={() => toggleSubject('Geography')}
                >
                  Geography
                </div>
                <div
                  className={`${styles.subject} ${selectedSubjects.includes('Economics') && styles.selected
                    }`}
                  onClick={() => toggleSubject('Economics')}
                >
                  Economics
                </div>
                <div
                  className={`${styles.subject} ${selectedSubjects.includes('Mathematics') && styles.selected
                    }`}
                  onClick={() => toggleSubject('Mathematics')}
                >
                  Mathematics
                </div>
                <div
                  className={`${styles.subject} ${selectedSubjects.includes('Physical Education') && styles.selected
                    }`}
                  onClick={() => toggleSubject('Physical Education')}
                >
                  Physical Education
                </div>
                <div
                  className={`${styles.subject} ${selectedSubjects.includes('Social Science') && styles.selected
                    }`}
                  onClick={() => toggleSubject('Social Science')}
                >
                  Social Science
                </div>
                <div
                  className={`${styles.subject} ${selectedSubjects.includes('Business') && styles.selected
                    }`}
                  onClick={() => toggleSubject('Business')}
                >
                  Business
                </div>
                <div
                  className={`${styles.subject} ${selectedSubjects.includes('Physics') && styles.selected
                    }`}
                  onClick={() => toggleSubject('Physics')}
                >
                  Physics
                </div>
              </div>
            </div>
            <MultipleTutor />
            <MultipletutGen />
            <MultipleAge/>
            <MUltipleRange />
            <MultipleYes />
            <div className={styles.formGroup}>
              <label htmlFor="time" className={styles.prelabel}>10: What budget for your tution fees?</label>
            </div>
            <BarGraph />
            <div className={styles.rowPre}>
              <button className={styles.backBtn} onClick={() => handleTabClick('academic')}>{'<'} Back</button>
              <UpdatedPopUp/>
            </div>
          </form>
        </div>
      )}

      {/* <ErrorPopUp isOpen={isModalOpen} onClose={closeModal} /> */}
      {/* <UpdatedPopUp isOpen={isModalOpen} onClose={closeModal} /> */}
      {/* <VerifyMail isOpen={isModalOpen} onClose={closeModal} /> */}
    </main>
  );
};

export default EditProfile;
