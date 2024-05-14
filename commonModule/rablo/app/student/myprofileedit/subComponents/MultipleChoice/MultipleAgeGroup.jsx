import Image from 'next/image';
import React, { useState } from 'react';
import styles from './MultipleChoice.module.scss';
import SelectedLogo from '../../../../Images/Images_student/selectedOption.svg';
import checkA from '../../../../Images/Images_student/checkA.svg';
import checkB from '../../../../Images/Images_student/checkB.svg';
import checkC from '../../../../Images/Images_student/checkC.svg';


const MultipleAgeGroup = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (option) => {
        setSelectedOption(selectedOption === option ? null : option);
    };

    return (
        <>
            <label htmlFor="time" className={styles.label}>
                3. What duration of classes would you prefer?
            </label>

            <div className={styles.optionsContainer}>
                <div className={`${styles.option} ${selectedOption === "1hr" ? styles.selected : ""}`} onClick={() => handleOptionChange("1hr")}>
                    {(selectedOption === "1hr") ? <Image src={SelectedLogo} alt="Selected" width={30} height={30} /> : <Image src={checkA} alt="alt" width={30} height={30} />}
                    <span>1 Hr</span>
                </div>
                <div className={`${styles.option} ${selectedOption === "1.25hr" ? styles.selected : ""}`} onClick={() => handleOptionChange("1.25hr")}>
                    {(selectedOption === "1.25hr") ? <Image src={SelectedLogo} alt="Selected" width={30} height={30} /> : <Image src={checkB} alt="alt" width={30} height={30} />}
                    <span>1.25 Hr</span>
                </div>
                <div className={`${styles.option} ${selectedOption === "1.5hr" ? styles.selected : ""}`} onClick={() => handleOptionChange("1.5hr")}>
                    {(selectedOption === "1.5hr") ? <Image src={SelectedLogo} alt="Selected" width={30} height={30} /> : <Image src={checkC} alt="alt" width={30} height={30} />}
                    <span>1.5 Hr</span>
                </div>
            </div>
        </>
    );
};

export default MultipleAgeGroup;
