// AcadEdit.js
'use client'
import React, { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation'
import styles from './Profile.module.scss';
import DropDownB from '../subComponents/DropDown/DropDownB';
import DropDownC from '../subComponents/DropDown/DropDownC';
import UpdatedPopUp from '../subComponents/Popups/UpdatedPopUp'
import { useDispatch, useSelector } from 'react-redux';


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

const AcadEdit = ({setBasic}) => {    
    const router = useRouter()
    const dispatch = useDispatch();
    const myProfileData = useSelector(state => state.MyProfile.data);
    const [schoolName,setSchoolName] = useState(myProfileData.schoolName);
    const [class_,setClass_] = useState(myProfileData.class_);
    const [boards,setBoard] = useState(myProfileData.boards)

    const updateClass = (newClass) => {
        setClass_(newClass);
    };

    const updateBoard = (newBoard) => {
        setBoard(newBoard);
    };

    const [selectedLanguage, setSelectedLanguage] = useState('English');

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
    };

    return (
        <div className={styles.formDiv}>
            <div className={styles.form}>
                <h2 className="">Change your acadamic details </h2>
                <div className={styles.formGroupRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="board">Board</label>
                        <DropDownB boards={boards} updateBoard={updateBoard} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="class">Class</label>
                        <DropDownC class_={class_} updateClass={updateClass}/>
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="school">School Name</label>
                    <input type="text" id="school" value={schoolName} onChange={(e)=>{setSchoolName(e.target.value)}}  placeholder='Enter School Name' />
                </div>
                {/* <div className={styles.formGroup}>
                    <label htmlFor="language">Select the Preferred Language</label>
                    <div className={styles.languageButtons}>
                        {languages.map((language) => (
                            <div
                                key={language}
                                className={`${styles.languageButton} ${selectedLanguage === language ? styles.selected : ''}`}
                                onClick={() => handleLanguageSelect(language)}
                            >
                                {language}
                            </div>
                        ))}
                    </div>
                </div> */}
                <div className={styles.acadRow}>
                    <button className={styles.backBtn} onClick={() => setBasic()}>{'<'} Back</button>
                    <UpdatedPopUp schoolName={schoolName} />
                </div>
            </div>
        </div>
    );
};

export default AcadEdit;
