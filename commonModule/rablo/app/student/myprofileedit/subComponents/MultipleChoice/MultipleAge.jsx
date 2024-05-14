import Image from 'next/image';
import React, { useState } from 'react';
import styles from './MultipleChoice.module.scss';
import SelectedLogo from '../../../../Images/Images_student/selectedOption.svg';
import checkA from '../../../../Images/Images_student/checkA.svg';
import checkB from '../../../../Images/Images_student/checkB.svg';
import checkC from '../../../../Images/Images_student/checkC.svg';
import checkD from '../../../../Images/Images_student/checkD.svg'

const MultipleAge = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (option) => {
        setSelectedOption(selectedOption === option ? null : option);
    };

    return (
        <>
            <label htmlFor="ageGroup" className={styles.label}>
                7. What age group range of tutor would you prefer?
            </label>

            <div className={styles.optionsColumn}>
                <div className={`${styles.optionC} ${styles.optionRange} ${selectedOption === "Youthful" ? styles.selected : ""}`} onClick={() => handleOptionChange("Youthful")}>
                    {(selectedOption === "Youthful") ? <Image src={SelectedLogo} alt="Selected" width={30} height={30} /> : <Image src={checkA} alt="alt" width={30} height={30} />}
                    <div className={styles.optionText}>
                        <span>Youthful</span>
                        <p className="">18 - 25 Years</p>
                    </div>
                </div>
                <div className={`${styles.optionC} ${styles.optionRange} ${selectedOption === "Experienced" ? styles.selected : ""}`} onClick={() => handleOptionChange("Experienced")}>
                    {(selectedOption === "Experienced") ? <Image src={SelectedLogo} alt="Selected" width={30} height={30} /> : <Image src={checkB} alt="alt" width={30} height={30} />}
                    <div className={styles.optionText}><span>Experienced</span>
                        <p className="">25 - 30 Years</p></div>
                </div>
                <div className={`${styles.optionC} ${styles.optionRange} ${selectedOption === "Mature" ? styles.selected : ""}`} onClick={() => handleOptionChange("Mature")}>
                    {(selectedOption === "Mature") ? <Image src={SelectedLogo} alt="Selected" width={30} height={30} /> : <Image src={checkC} alt="alt" width={30} height={30} />}
                    <div className={styles.optionText}><span>Mature</span>
                        <p className="">30 - 35 Years</p></div>
                </div>
                <div className={`${styles.optionC} ${styles.optionRange} ${selectedOption === "Seasoned" ? styles.selected : ""}`} onClick={() => handleOptionChange("Seasoned")}>
                    {(selectedOption === "Seasoned") ? <Image src={SelectedLogo} alt="Selected" width={30} height={30} /> : <Image src={checkD} alt="alt" width={30} height={30} />}
                    <div className={styles.optionText}><span>Seasoned</span>
                        <p className="">35+ Years</p></div>
                </div>
            </div>
        </>
    );
};

export default MultipleAge;
