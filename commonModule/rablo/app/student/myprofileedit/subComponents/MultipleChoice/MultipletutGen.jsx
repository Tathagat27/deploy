import Image from 'next/image';
import React, { useState } from 'react';
import styles from './MultipleChoice.module.scss';
import SelectedLogo from '../../../../Images/Images_student/selectedOption.svg';
import checkA from '../../../../Images/Images_student/checkA.svg';
import checkB from '../../../../Images/Images_student/checkB.svg';
import checkC from '../../../../Images/Images_student/checkC.svg';


const MultipletutGen = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (option) => {
        setSelectedOption(selectedOption === option ? null : option);
    };

    return (
        <>
            <label htmlFor="gender" className={styles.label}>
                6. What gender of tutor would you prefer?
            </label>

            <div className={styles.optionsContainer}>
                <div className={`${styles.option} ${selectedOption === "Male" ? styles.selected : ""}`} onClick={() => handleOptionChange("Male")}>
                    {(selectedOption === "Male") ? <Image src={SelectedLogo} alt="Selected" width={30} height={30} /> : <Image src={checkA} alt="alt" width={30} height={30} />}
                    <span>Male</span>
                </div>
                <div className={`${styles.option} ${selectedOption === "Female" ? styles.selected : ""}`} onClick={() => handleOptionChange("Female")}>
                    {(selectedOption === "Female") ? <Image src={SelectedLogo} alt="Selected" width={30} height={30} /> : <Image src={checkB} alt="alt" width={30} height={30} />}
                    <span>Female</span>
                </div>
                <div className={`${styles.option} ${selectedOption === "Both" ? styles.selected : ""}`} onClick={() => handleOptionChange("Both")}>
                    {(selectedOption === "Both") ? <Image src={SelectedLogo} alt="Selected" width={30} height={30} /> : <Image src={checkC} alt="alt" width={30} height={30} />}
                    <span>Both</span>
                </div>
            </div>
        </>
    );
};

export default MultipletutGen;
