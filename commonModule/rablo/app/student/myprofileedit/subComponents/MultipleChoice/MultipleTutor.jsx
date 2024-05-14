import Image from 'next/image';
import React, { useState } from 'react';
import styles from './MultipleChoice.module.scss';
import SelectedLogo from '../../../../Images/Images_student/selectedOption.svg';
import checkA from '../../../../Images/Images_student/checkA.svg';
import checkB from '../../../../Images/Images_student/checkB.svg';

const MultipleTutor = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (option) => {
        setSelectedOption(selectedOption === option ? null : option);
    };

    return (
        <>
            <label htmlFor="tutorPreference" className={styles.label}>
                5. What kind of tutor would you prefer?
            </label>

            <div className={styles.optionsColumn}>
                <div className={`${styles.optionC} ${styles.optionRangeA} ${selectedOption === "Friendly" ? styles.selected : ""}`} onClick={() => handleOptionChange("Friendly")}>
                    {(selectedOption === "Friendly") ? <Image src={SelectedLogo} alt="Selected" width={30} height={30} /> : <Image src={checkA} alt="alt" width={30} height={30} />}
                    <span>Friendly and Supportive</span>
                </div>
                <div className={`${styles.optionC} ${styles.optionRangeA} ${selectedOption === "Strict" ? styles.selected : ""}`} onClick={() => handleOptionChange("Strict")}>
                    {(selectedOption === "Strict") ? <Image src={SelectedLogo} alt="Selected" width={30} height={30} /> : <Image src={checkB} alt="alt" width={30} height={30} />}
                    <span>Strict and Disciplined</span>
                </div>
            </div>
        </>
    );
};

export default MultipleTutor;
