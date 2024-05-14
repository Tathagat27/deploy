import Image from 'next/image';
import React, { useState } from 'react';
import styles from './MultipleChoice.module.scss';
import SelectedLogo from '../../../../Images/Images_student/selectedOption.svg';
import checkA from '../../../../Images/Images_student/checkA.svg';
import checkB from '../../../../Images/Images_student/checkB.svg';

const MultipleYes = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (option) => {
        setSelectedOption(selectedOption === option ? null : option);
    };

    return (
        <>
            <label htmlFor="time" className={styles.label}>
                9. Have you ever had a tuition with a tutor who is from a reputed school or Coaching Institute?
            </label>

            <div className={styles.optionsContainer}>
                <div className={`${styles.option} ${selectedOption === "Yes" ? styles.selected : ""}`} onClick={() => handleOptionChange("Yes")}>
                    {(selectedOption === "Yes") ? <Image src={SelectedLogo} alt="Selected" width={30} height={30} /> : <Image src={checkA} alt="alt" width={30} height={30} />}
                    <span>Yes</span>
                </div>
                <div className={`${styles.option} ${selectedOption === "No" ? styles.selected : ""}`} onClick={() => handleOptionChange("No")}>
                    {(selectedOption === "No") ? <Image src={SelectedLogo} alt="Selected" width={30} height={30} /> : <Image src={checkB} alt="alt" width={30} height={30} />}
                    <span>No</span>
                </div>
            </div>
        </>
    );
};

export default MultipleYes;
