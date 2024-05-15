import React from 'react'
import styles from './style.module.css'
import { CiEdit } from "react-icons/ci";
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Email from '../../../Images/Images_student/Email.svg'
import Phone from '../../../Images/Images_student/Phone.svg'
import WhatsApp from '../../../Images/Images_student/WhatsApp.svg'
import LocationLogo from '../../../Images/Images_student/LocationOver.svg'
import EnglishLogo from '../../../Images/Images_student/EnglishLogo.svg'
import EduLogo from '../../../Images/Images_student/EduLogo.svg'
import InstiLogo from '../../../Images/Images_student/InstiLogo.svg'
import { useDispatch, useSelector } from 'react-redux';


const Overview = () => {
    const router = useRouter()
    const myProfileData = useSelector(state => state.MyProfile.data);

    return (
        <main className={styles.overMain}>
            <div className={styles.overview}>
                <div className={styles.row}>
                    <span className={styles.rowMain}>Contact Details </span>
                    <span onClick={() => router.push('/student/myprofileedit')} className={styles.edit}><CiEdit /> Edit</span>
                </div>
                <div className={styles.details}>
                    <div className={styles.divCenter}>
                        <div className={styles.locked}>
                            <Image className={styles.detLogo} src={Email} alt='alt' />
                        </div>
                        <div >
                            <h3 className={styles.textBlack}>{myProfileData?.email}</h3>
                            <div className={styles.addbutton}>
                                <span className={styles.red}>Email Address</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.divCenter}>
                        <div className={styles.locked}>
                            <Image className={styles.detLogo} src={Phone} alt='alt' />
                        </div>
                        <div>
                            <h3 className={styles.textBlack}>{myProfileData.phoneNumber.split('-')}</h3>
                            <div className={styles.addbutton}>
                                <span className={styles.red}>Mobile Number</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.divCenter}>
                        <div className={styles.locked}>
                            <Image className={styles.detLogo} src={WhatsApp} alt='alt' />
                        </div>
                        <div>
                            <h3 className={styles.textBlack}>{myProfileData?.guardianMobNumber.split('-')}</h3>
                            <div className={styles.addbutton}>
                                <span className={styles.red}>WhatsApp Number</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.divCenter}>
                        <div className={styles.locked}>
                            <Image  src={LocationLogo} alt='alt' />
                        </div>
                        <div>
                            <h3 className={styles.textBlack}>{myProfileData?.city} </h3>
                            <div className={styles.addbutton}>
                                <span className={styles.red}>Address</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className={styles.borderBottom}>
                    <h3 className={styles.rowMain}>Current Address</h3>
                    <br />
                    <div className={styles.location}>
                        <Image src={Location} alt="alt" className={styles.location} />
                    </div>
                </div> */}
                <div className={styles.rowEd}>
                    <span className={styles.rowMain}>Subjects </span>
                </div>
                <div className={styles.subjects}>
                    {myProfileData?.subjects.map((subject, ind) => (
                        <div key={ind} className={styles.divCenter}>
                            <div className={styles.locked}>
                                <Image className={styles.subLogo} src={EnglishLogo} alt='alt' />
                            </div>
                            <div >
                                <h3 className={styles.textBlack}>{subject}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.rowEd}>
                    <span className={styles.rowMain}>Educational Information </span>
                    <span onClick={() => router.push('/student/myprofileedit')} className={styles.edit}><CiEdit /> Edit</span>
                </div>
                <div className={styles.details}>
                    <div className={styles.divCenter}>
                        <div className={styles.locked}>
                            <Image className={styles.detLogo} src={EduLogo} alt='alt' />
                        </div>
                        <div >
                            <h3 className={styles.textBlack}>{myProfileData?.class_} Std</h3>
                            <div className={styles.addbutton}>
                                <span className={styles.red}>{myProfileData?.schoolBoard}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.divCenter}>
                        <div className={styles.locked}>
                            <Image className={styles.detLogo} src={InstiLogo} alt='alt' />
                        </div>
                        <div>
                            <h3 className={styles.textBlack}>{myProfileData?.schoolName}</h3>                 
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Overview
