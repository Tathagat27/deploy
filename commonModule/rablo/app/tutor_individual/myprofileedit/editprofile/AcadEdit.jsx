// AcadEdit.js
'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import styles from './Profile.module.scss';
import DropDownB from '../subComponents/DropDown/DropDownB';
import DropDownC from '../subComponents/DropDown/DropDownC';
import UpdatedPopUp from '../subComponents/Popups/UpdatedPopUp'

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

const AcadEdit = () => {
    const router = useRouter()
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
                        <DropDownB />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="class">Class</label>
                        <DropDownC />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="school">School Name</label>
                    <input type="text" id="school" placeholder='Enter School Name' />
                </div>
                <div className={styles.formGroup}>
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
                </div>
                <div className={styles.acadRow}>
                    <button className={styles.backBtn} onClick={() => handleTabClick('basic')}>{'<'} Back</button>
                    <UpdatedPopUp/>
                </div>
            </div>
        </div>
    );
};

export default AcadEdit;
