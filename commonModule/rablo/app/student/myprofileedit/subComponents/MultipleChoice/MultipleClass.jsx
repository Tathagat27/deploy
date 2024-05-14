import Image from 'next/image';
import React, { useState } from 'react';
import styles from './MultipleChoice.module.scss';
import ProfileLogo from '../../../../Images/Images_student/ProfileTick.svg';
import checkA from '../../../../Images/Images_student/checkA.svg';
import checkB from '../../../../Images/Images_student/checkB.svg';

const MultipleClass = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (option) => {
        setSelectedOption(selectedOption === option ? null : option);
    };

    return (
        <>
            <label htmlFor="attendance" className={styles.label}>
                1. How would you prefer to attend classes?
            </label>

            <div className={styles.optionsContainer}>
                <div className={`${selectedOption === "Online" && styles.selectd}`}>
                    <div className={`${styles.option} ${selectedOption === "Online" ? styles.select : ""}`} onClick={() => handleOptionChange("Online")}>
                        <Image src={checkA} alt="Selected" width={30} height={30} />
                        <span>Online</span>
                    </div>
                    {selectedOption === "Online" &&
                    <div className={styles.belowDiv}>
                        <Image src={ProfileLogo} alt="alt" width={12} height={12} />
                        <p className="">256465+</p>
                        <div className="">
                            <p className="">Already</p>
                            <p className=''>Enrolled</p>
                        </div>
                    </div>}
                </div>
                <div className={`${selectedOption === "Offline" && styles.selectd}`}>
                    <div className={`${styles.option} ${selectedOption === "Offline" ? styles.select : ""}`} onClick={() => handleOptionChange("Offline")}>
                        <Image src={checkB} alt="alt" width={30} height={30} />
                        <span>Offline</span>
                    </div>
                    {selectedOption === "Offline" &&
                        <div className={styles.belowDiv}>
                            <Image src={ProfileLogo} alt="alt" width={12} height={12} />
                            <p className="">256465+</p>
                            <div className="">
                                <p className="">Already</p>
                                <p className=''>Enrolled</p>
                            </div>
                        </div>}
                </div>
            </div>
        </>
    );
};

export default MultipleClass;
