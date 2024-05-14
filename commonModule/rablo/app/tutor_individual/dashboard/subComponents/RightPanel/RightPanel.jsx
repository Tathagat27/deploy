"use client"

import Image from 'next/image'
import { IoIosArrowBack } from "react-icons/io";
import danger from './Assets/Images/danger 1.png'
import profile from './Assets/Images/Profile Picture.png'

// Styling
import './styles/RIghtPanel.css'

import dynamic from "next/dynamic";


const RightPanel = ({ action, isSidebarOpen, toggleSidebar }) => {


  return (
    <div className='Right_Panel_Wrapper'>

      <div className='Logo_Wrapper'>
        <div className="arrow"><IoIosArrowBack style={{ marginTop:'-3vh',marginLeft:'-0.1vw' }}/></div>
        <Image alt='danger' src={danger} style={{ width: "2vw", height: "auto", filter: 'brightness(100%)' }} />
      </div>


      <div className="Profile_Wrapper">
        <center>
          <Image src={profile} alt='profile' style={{ width: "6vw", height: "auto", filter: 'brightness(100%)' }} />
          <div className="text">
            <h5 style={{ fontSize: '1.6vw',fontWeight:'600' }}>John Pope</h5>
            <p style={{ fontSize: '1vw',marginTop:'-1vh' }}>Lucknow, Uttar Pradesh</p>
          </div>
          <div className="completion_Btn">Complete Your Profile(0/4)</div>
        </center>
      </div>
    </div>
  )
}

export default dynamic (() => Promise.resolve(RightPanel), {ssr: false})