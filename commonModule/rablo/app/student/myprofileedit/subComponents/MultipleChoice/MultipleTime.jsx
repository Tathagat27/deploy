import Image from 'next/image';
import React, { useState } from 'react';
import styles from './MultipleChoice.module.scss';
import SelectedLogo from '../../../../Images/Images_student/selectedOption.svg';
import checkA from '../../../../Images/Images_student/checkA.svg';
import checkB from '../../../../Images/Images_student/checkB.svg';
import checkD from '../../../../Images/Images_student/checkD.svg'
import checkC from '../../../../Images/Images_student/checkC.svg';
import checkE from '../../../../Images/Images_student/checkE.svg';
import checkF from '../../../../Images/Images_student/checkF.svg';
import Night from '../../../../Images/Images_student/Night.svg'
import After from '../../../../Images/Images_student/After.svg'
import Morning from '../../../../Images/Images_student/EarlyMorning.svg'

const options = ["Early Morning", "Morning", "Afternoon", "Evening", "Night", "Late Night"];
const suboptions = ["(before 9 AM)", "(9 AM - 12 AM )", "(12 PM - 3 PM )","(3 PM - 6 PM)","(6 PM - 9 PM)","( after 9 AM)"]

const MultipleTime = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (option) => {
        setSelectedOption(selectedOption === option ? null : option);
    };

    return (
        <>
            <label htmlFor="time" className={styles.label}>
                2. What timing slot would be suitable for you to attend classes?
            </label>

            <div className={styles.optionsColumn}>
                <div className={`${styles.optionC} ${styles.optionRangeB} ${selectedOption === options[0] ? styles.selected : ""}`} onClick={() => handleOptionChange(options[0])}>
                    {(selectedOption === options[0]) ? <Image src={SelectedLogo} alt="Selected" width={30} height={30} /> : <Image src={checkA} alt="alt" width={30} height={30} />}
                    {(selectedOption !== options[0]) ? <Image src={Morning} alt="alt" width={20} height={20} /> : <div className={styles.DarkLogo}><svg width="20" height="20" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.2617 21.5234H29.4196" stroke="#fff" stroke-opacity="0.8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4.15625 21.5234H21.5247" stroke="#fff" stroke-opacity="0.8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16.7866 6.52344C11.1182 6.52344 6.52344 11.1182 6.52344 16.7866" stroke="#fff" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M27.0537 16.7858C27.0537 13.1384 25.1432 9.91735 22.2695 8.10156" stroke="#fff" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.72104 5.72104L5.51577 5.51577M27.8579 5.72104L28.0632 5.51577M16.7895 1.1263V1M1.12635 16.7895H1M32.5789 16.7895H32.4526" stroke="#fff" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.31641 26.2656H26.2638" stroke="#fff" stroke-opacity="0.8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.0508 31H21.5245" stroke="#fff" stroke-opacity="0.8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></div>}
                    <div className={styles.optionText}>
                        <span>{options[0]}</span>
                        <p>{suboptions[0]}</p>
                    </div>
                </div>

                <div className={`${styles.optionC} ${styles.optionRangeB} ${selectedOption === options[1] ? styles.selected : ""}`} onClick={() => handleOptionChange(options[1])}>
                    {(selectedOption === options[1]) ? <Image src={SelectedLogo} alt="Selected" width={30} height={30} /> : <Image src={checkB} alt="alt" width={30} height={30} />}
                    {(selectedOption !== options[1]) ? <Image src={Morning} alt="alt" width={20} height={20} /> : <div className={styles.DarkLogo}><svg width="20" height="20" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.2617 21.5234H29.4196" stroke="#fff" stroke-opacity="0.8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4.15625 21.5234H21.5247" stroke="#fff" stroke-opacity="0.8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16.7866 6.52344C11.1182 6.52344 6.52344 11.1182 6.52344 16.7866" stroke="#fff" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M27.0537 16.7858C27.0537 13.1384 25.1432 9.91735 22.2695 8.10156" stroke="#fff" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.72104 5.72104L5.51577 5.51577M27.8579 5.72104L28.0632 5.51577M16.7895 1.1263V1M1.12635 16.7895H1M32.5789 16.7895H32.4526" stroke="#fff" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.31641 26.2656H26.2638" stroke="#fff" stroke-opacity="0.8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.0508 31H21.5245" stroke="#fff" stroke-opacity="0.8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></div>}
                    <div className={styles.optionText}>
                        <span>{options[1]}</span>
                        <p>{suboptions[1]}</p>
                    </div>
                </div>

                <div className={`${styles.optionC} ${styles.optionRangeB} ${selectedOption === options[2] ? styles.selected : ""}`} onClick={() => handleOptionChange(options[2])}>
                    {(selectedOption === options[2]) ? <Image src={SelectedLogo} alt="Selected" width={30} height={30} /> : <Image src={checkC} alt="alt" width={30} height={30} />}
                    {(selectedOption !== options[2]) ? <Image src={After} alt="alt" width={20} height={20} /> : <div className={styles.DarkLogo}><svg width="20" fill='#fff' height="20" viewBox="0 0 30 30"  xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0255 24.9337C9.56098 24.9337 5.12109 20.4939 5.12109 15.0294C5.12109 9.56489 9.56098 5.125 15.0255 5.125C20.4899 5.125 24.9298 9.56489 24.9298 15.0294C24.9298 20.4939 20.4899 24.9337 15.0255 24.9337ZM15.0255 7.17418C10.6949 7.17418 7.17027 10.6988 7.17027 15.0294C7.17027 19.36 10.6949 22.8846 15.0255 22.8846C19.3561 22.8846 22.8807 19.36 22.8807 15.0294C22.8807 10.6988 19.3561 7.17418 15.0255 7.17418Z" fill="#fff" fill-opacity="0.8" />
                        <path d="M15.0273 30C14.276 30 13.6612 29.4399 13.6612 28.6885V28.5792C13.6612 27.8279 14.276 27.2131 15.0273 27.2131C15.7787 27.2131 16.3934 27.8279 16.3934 28.5792C16.3934 29.3306 15.7787 30 15.0273 30ZM24.7814 26.1475C24.4262 26.1475 24.0847 26.0109 23.8115 25.7514L23.6339 25.5738C23.1011 25.041 23.1011 24.1803 23.6339 23.6475C24.1667 23.1148 25.0273 23.1148 25.5601 23.6475L25.7377 23.8251C26.2705 24.3579 26.2705 25.2186 25.7377 25.7514C25.4781 26.0109 25.1366 26.1475 24.7814 26.1475ZM5.27322 26.1475C4.91803 26.1475 4.5765 26.0109 4.30328 25.7514C3.77049 25.2186 3.77049 24.3579 4.30328 23.8251L4.48087 23.6475C5.01366 23.1148 5.87432 23.1148 6.4071 23.6475C6.93989 24.1803 6.93989 25.041 6.4071 25.5738L6.22951 25.7514C5.96995 26.0109 5.61475 26.1475 5.27322 26.1475ZM28.6885 16.3934H28.5792C27.8279 16.3934 27.2131 15.7787 27.2131 15.0273C27.2131 14.276 27.8279 13.6612 28.5792 13.6612C29.3306 13.6612 30 14.276 30 15.0273C30 15.7787 29.4399 16.3934 28.6885 16.3934ZM1.47541 16.3934H1.36612C0.614754 16.3934 0 15.7787 0 15.0273C0 14.276 0.614754 13.6612 1.36612 13.6612C2.11749 13.6612 2.78689 14.276 2.78689 15.0273C2.78689 15.7787 2.22678 16.3934 1.47541 16.3934ZM24.6038 6.81694C24.2486 6.81694 23.9071 6.68033 23.6339 6.42076C23.1011 5.88798 23.1011 5.02732 23.6339 4.49454L23.8115 4.31694C24.3443 3.78415 25.2049 3.78415 25.7377 4.31694C26.2705 4.84973 26.2705 5.71038 25.7377 6.24317L25.5601 6.42076C25.3005 6.68033 24.959 6.81694 24.6038 6.81694ZM5.45082 6.81694C5.09563 6.81694 4.7541 6.68033 4.48087 6.42076L4.30328 6.22951C3.77049 5.69672 3.77049 4.83607 4.30328 4.30328C4.83607 3.77049 5.69672 3.77049 6.22951 4.30328L6.4071 4.48087C6.93989 5.01366 6.93989 5.87432 6.4071 6.4071C6.14754 6.68033 5.79235 6.81694 5.45082 6.81694ZM15.0273 2.78689C14.276 2.78689 13.6612 2.22678 13.6612 1.47541V1.36612C13.6612 0.614754 14.276 0 15.0273 0C15.7787 0 16.3934 0.614754 16.3934 1.36612C16.3934 2.11749 15.7787 2.78689 15.0273 2.78689Z" fill="#fff" fill-opacity="0.8" />
                    </svg></div>}
                    <div className={styles.optionText}>
                        <span>{options[2]}</span>
                        <p>{suboptions[2]}</p>
                    </div>
                </div>

                <div className={`${styles.optionC} ${styles.optionRangeB} ${selectedOption === options[3] ? styles.selected : ""}`} onClick={() => handleOptionChange(options[3])}>
                    {(selectedOption === options[3]) ? <Image src={SelectedLogo} alt="Selected" width={30} height={30} /> : <Image src={checkD} alt="alt" width={30} height={30} />}
                    {(selectedOption !== options[3]) ? <Image src={After} alt="alt" width={20} height={20} /> : <div className={styles.DarkLogo}><svg width="20" fill='#fff' height="20" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0255 24.9337C9.56098 24.9337 5.12109 20.4939 5.12109 15.0294C5.12109 9.56489 9.56098 5.125 15.0255 5.125C20.4899 5.125 24.9298 9.56489 24.9298 15.0294C24.9298 20.4939 20.4899 24.9337 15.0255 24.9337ZM15.0255 7.17418C10.6949 7.17418 7.17027 10.6988 7.17027 15.0294C7.17027 19.36 10.6949 22.8846 15.0255 22.8846C19.3561 22.8846 22.8807 19.36 22.8807 15.0294C22.8807 10.6988 19.3561 7.17418 15.0255 7.17418Z" fill="#fff" fill-opacity="0.8" />
                        <path d="M15.0273 30C14.276 30 13.6612 29.4399 13.6612 28.6885V28.5792C13.6612 27.8279 14.276 27.2131 15.0273 27.2131C15.7787 27.2131 16.3934 27.8279 16.3934 28.5792C16.3934 29.3306 15.7787 30 15.0273 30ZM24.7814 26.1475C24.4262 26.1475 24.0847 26.0109 23.8115 25.7514L23.6339 25.5738C23.1011 25.041 23.1011 24.1803 23.6339 23.6475C24.1667 23.1148 25.0273 23.1148 25.5601 23.6475L25.7377 23.8251C26.2705 24.3579 26.2705 25.2186 25.7377 25.7514C25.4781 26.0109 25.1366 26.1475 24.7814 26.1475ZM5.27322 26.1475C4.91803 26.1475 4.5765 26.0109 4.30328 25.7514C3.77049 25.2186 3.77049 24.3579 4.30328 23.8251L4.48087 23.6475C5.01366 23.1148 5.87432 23.1148 6.4071 23.6475C6.93989 24.1803 6.93989 25.041 6.4071 25.5738L6.22951 25.7514C5.96995 26.0109 5.61475 26.1475 5.27322 26.1475ZM28.6885 16.3934H28.5792C27.8279 16.3934 27.2131 15.7787 27.2131 15.0273C27.2131 14.276 27.8279 13.6612 28.5792 13.6612C29.3306 13.6612 30 14.276 30 15.0273C30 15.7787 29.4399 16.3934 28.6885 16.3934ZM1.47541 16.3934H1.36612C0.614754 16.3934 0 15.7787 0 15.0273C0 14.276 0.614754 13.6612 1.36612 13.6612C2.11749 13.6612 2.78689 14.276 2.78689 15.0273C2.78689 15.7787 2.22678 16.3934 1.47541 16.3934ZM24.6038 6.81694C24.2486 6.81694 23.9071 6.68033 23.6339 6.42076C23.1011 5.88798 23.1011 5.02732 23.6339 4.49454L23.8115 4.31694C24.3443 3.78415 25.2049 3.78415 25.7377 4.31694C26.2705 4.84973 26.2705 5.71038 25.7377 6.24317L25.5601 6.42076C25.3005 6.68033 24.959 6.81694 24.6038 6.81694ZM5.45082 6.81694C5.09563 6.81694 4.7541 6.68033 4.48087 6.42076L4.30328 6.22951C3.77049 5.69672 3.77049 4.83607 4.30328 4.30328C4.83607 3.77049 5.69672 3.77049 6.22951 4.30328L6.4071 4.48087C6.93989 5.01366 6.93989 5.87432 6.4071 6.4071C6.14754 6.68033 5.79235 6.81694 5.45082 6.81694ZM15.0273 2.78689C14.276 2.78689 13.6612 2.22678 13.6612 1.47541V1.36612C13.6612 0.614754 14.276 0 15.0273 0C15.7787 0 16.3934 0.614754 16.3934 1.36612C16.3934 2.11749 15.7787 2.78689 15.0273 2.78689Z" fill="#fff" fill-opacity="0.8" />
                    </svg></div>}
                    <div className={styles.optionText}>
                        <span>{options[3]}</span>
                        <p>{suboptions[3]}</p>
                    </div>
                </div>

                <div className={`${styles.optionC} ${styles.optionRangeB} ${selectedOption === options[4] ? styles.selected : ""}`} onClick={() => handleOptionChange(options[4])}>
                    {(selectedOption === options[4]) ? <Image src={SelectedLogo} alt="Selected" width={30} height={30} /> : <Image src={checkE} alt="alt" width={30} height={30} />}
                    {(selectedOption !== options[4]) ? <Image src={Night} alt="alt" width={20} height={20} /> : <div className={styles.DarkLogo}><svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.26439 6.07595C1.99998 8.95521 0.755301 12.6443 1.04023 16.6333C1.58009 24.3563 8.1334 30.6397 15.9763 30.9846C21.5099 31.2245 26.4586 28.6452 29.4278 24.5812C30.6575 22.9167 29.9977 21.807 27.9432 22.1819C26.9385 22.3618 25.9038 22.4368 24.824 22.3918C17.4909 22.0919 11.4925 15.9585 11.4625 8.71527C11.4475 6.76578 11.8524 4.92125 12.5872 3.24169C13.397 1.38217 12.4223 0.497396 10.5478 1.29219" stroke="#fff" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></div>}
                    <div className={styles.optionText}>
                        <span>{options[4]}</span>
                        <p>{suboptions[4]}</p>
                    </div>
                </div>

                <div className={`${styles.optionC} ${styles.optionRangeB} ${selectedOption === options[5] ? styles.selected : ""}`} onClick={() => handleOptionChange(options[5])}>
                    {(selectedOption === options[5]) ? <Image src={SelectedLogo} alt="Selected" width={30} height={30} /> : <Image src={checkF} alt="alt" width={30} height={30} />}
                    {(selectedOption !== options[5]) ? <Image src={Night} alt="alt" width={20} height={20} /> : <div className={styles.DarkLogo}><svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.26439 6.07595C1.99998 8.95521 0.755301 12.6443 1.04023 16.6333C1.58009 24.3563 8.1334 30.6397 15.9763 30.9846C21.5099 31.2245 26.4586 28.6452 29.4278 24.5812C30.6575 22.9167 29.9977 21.807 27.9432 22.1819C26.9385 22.3618 25.9038 22.4368 24.824 22.3918C17.4909 22.0919 11.4925 15.9585 11.4625 8.71527C11.4475 6.76578 11.8524 4.92125 12.5872 3.24169C13.397 1.38217 12.4223 0.497396 10.5478 1.29219" stroke="#fff" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></div>}
                    <div className={styles.optionText}>
                        <span>{options[5]}</span>
                        <p>{suboptions[5]}</p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default MultipleTime;

