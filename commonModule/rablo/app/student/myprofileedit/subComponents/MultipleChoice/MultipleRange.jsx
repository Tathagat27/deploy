import Image from 'next/image';
import React, { useState } from 'react';
import styles from './MultipleChoice.module.scss';
import SelectedLogo from '../../../../Images/Images_student/selectedOption.svg';
import checkA from '../../../../Images/Images_student/checkA.svg';
import checkB from '../../../../Images/Images_student/checkB.svg';
import checkC from '../../../../Images/Images_student/checkC.svg';

const MultipleRange = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (option) => {
        setSelectedOption(selectedOption === option ? null : option);
    };

    return (
        <>
            <label htmlFor="locationRange" className={styles.label}>
                8. What location range of tutor would you prefer?
            </label>

            <div className={styles.optionsContainer}>
                <div className={`${styles.option} ${selectedOption === "under2km" ? styles.selected : ""} ${styles.optionRange}`} onClick={() => handleOptionChange("under2km")}>
                    {(selectedOption === "under2km") ? <Image src={SelectedLogo} alt="Selected" width={30} height={30} /> : <Image src={checkA} alt="alt" width={30} height={30} />}
                    <span className='span'><span className={styles.small}>under</span> 2km</span>
                </div>
                <div className={`${styles.option} ${selectedOption === "under5km" ? styles.selected : ""} ${styles.optionRange}`} onClick={() => handleOptionChange("under5km")}>
                    {(selectedOption === "under5km") ? <Image src={SelectedLogo} alt="Selected" width={30} height={30} /> : <Image src={checkB} alt="alt" width={30} height={30} />}
                    <span className='span'><span className={styles.small}>under</span> 5km</span>
                </div>
                <div className={`${styles.option} ${styles.optionRange} ${selectedOption === "under10km" ? styles.selected : ""} `} onClick={() => handleOptionChange("under10km")}>
                    {(selectedOption === "under10km") ? <Image src={SelectedLogo} alt="Selected" width={30} height={30} /> : <Image src={checkC} alt="alt" width={30} height={30} />}
                    <span className='span'><span className={styles.small}>under</span> 10km</span>
                </div>
            </div>
        </>
    );
};

export default MultipleRange;
