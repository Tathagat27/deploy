import Image from 'next/image'
import React, { useState } from 'react';
import styles from './MultipleChoice.module.scss';
import SelectedLogo from '../../../../Images/Images_student/selectedOption.svg'

const MultipleChoice = ({ question, options }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (option) => {
        setSelectedOption(selectedOption === option ? null : option);
    };

    return (
        <>
            <label htmlFor="time" className={styles.label}>{question}</label>

            <div className={styles.optionsContainer}>
                {options.map((option, index) => (
                    <div key={index} className={styles.option} onClick={() => handleOptionChange(option)}>
                        <span>{option}</span>
                    </div>
                ))}
            </div>

            {selectedOption && (
                <Image src={SelectedLogo} alt="alt" width={20} height={20}/>
            )}
        </>
    );
};

export default MultipleChoice;
