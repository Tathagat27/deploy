import React from 'react'
import styles from './style.module.css'
import { CiEdit } from "react-icons/ci";
import Location from '../../../Images/Images_tutor/Rectangle.png'
import Image from 'next/image'

import Email from '../../../Images/Images_tutor/Email.svg'
import Phone from '../../../Images/Images_tutor/Phone.svg'
import WhatsApp from '../../../Images/Images_tutor/WhatsApp.svg'
import LocationLogo from '../../../Images/Images_tutor/LocationOver.svg'
import EnglishLogo from '../../../Images/Images_tutor/EnglishLogo.svg'
import HindiLogo from '../../../Images/Images_tutor/HindiLogo.svg'
import ChLogo from '../../../Images/Images_tutor/ChLogo.svg'
import EduLogo from '../../../Images/Images_tutor/EduLogo.svg'
import InstiLogo from '../../../Images/Images_tutor/InstiLogo.svg'
import Link from 'next/link'

const Overview = () => {
    return (
        <main className={styles.overMain}>
            <div className={styles.overview}>
                <div className={styles.row}>
                    <span className={styles.rowMain}>Contact Details </span>
                    <span className={styles.edit}><CiEdit /> Edit</span>
                </div>
                <div className={styles.details}>
                    <div className={styles.divCenter}>
                        <div className={styles.locked}>
                            <Image src={Email} alt='alt' />
                        </div>
                        <div >
                            <h3 className={styles.textBlack}>email@address.com</h3>
                            <div className={styles.addbutton}>
                                <span className={styles.red}>Email Address</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.divCenter}>
                        <div className={styles.locked}>
                            <Image src={Phone} alt='alt' />
                        </div>
                        <div>
                            <h3 className={styles.textBlack}>+91 7007 881 5595</h3>
                            <div className={styles.addbutton}>
                                <span className={styles.red}>Mobile Number</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.divCenter}>
                        <div className={styles.locked}>
                            <Image src={WhatsApp} alt='alt' />
                        </div>
                        <div>
                            <h3 className={styles.textBlack}>+91 7007 881 5595</h3>
                            <div className={styles.addbutton}>
                                <span className={styles.red}>WhatsApp Number</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.divCenter}>
                        <div className={styles.locked}>
                            <Image src={LocationLogo} alt='alt' />
                        </div>
                        <div>
                            <h3 className={styles.textBlack}>Banglore, Karanataka</h3>
                            <div className={styles.addbutton}>
                                <span className={styles.red}>Address</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.borderBottom}>
                    <h3 className={styles.rowMain}>Current Address</h3>
                    <br />
                    <div className={styles.location}>
                        <Image src={Location} alt="alt" className={styles.location} />
                    </div>
                </div>
                <div className={styles.rowEd}>
                    <span className={styles.rowMain}>Subjects </span>
                </div>
                <div className={styles.subjects}>
                    <div className={styles.divCenter}>
                        <div className={styles.locked}>
                            <Image src={EnglishLogo} alt='alt' />
                        </div>
                        <div >
                            <h3 className={styles.textBlack}>English</h3>
                        </div>
                    </div>
                    <div className={styles.divCenter}>
                        <div className={styles.locked}>
                            <Image src={HindiLogo} alt='alt' />
                        </div>
                        <div>
                            <h3 className={styles.textBlack}>Hindi</h3>
                        </div>
                    </div>
                    <div className={styles.divCenter}>
                        <div className={styles.locked}>
                            <Image src={ChLogo} alt='alt' />
                        </div>
                        <div>
                            <h3 className={styles.textBlack}>Chemistry</h3>
                        </div>
                    </div>
                </div>
                <div className={styles.rowEd}>
                    <span className={styles.rowMain}>Educational Information </span>
                    <span className={styles.edit}><CiEdit /> Edit</span>
                </div>
                <div className={styles.details}>
                    <div className={styles.divCenter}>
                        <div className={styles.locked}>
                            <Image src={EduLogo} alt='alt' />
                        </div>
                        <div >
                            <h3 className={styles.textBlack}>11th Std</h3>
                            <div className={styles.addbutton}>
                                <span className={styles.red}>CBSC</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.divCenter}>
                        <div className={styles.locked}>
                            <Image src={InstiLogo} alt='alt' />
                        </div>
                        <div>
                            <h3 className={styles.textBlack}>Vedhaic Vidhyalaya</h3>                 
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Overview
