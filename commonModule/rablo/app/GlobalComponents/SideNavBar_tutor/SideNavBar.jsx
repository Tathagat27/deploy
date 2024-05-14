"use client"
import './styles/SideNavBar.css'
import React, { useState } from 'react';
//Icons
import Menu_Icon from './icons/Menu_icon.svg'
import Home_Icon from './icons/Home.svg'
import Add_Students from './icons/Add_students.svg'
import Batch_Icon from './icons/Batch.svg'
import Add_Plan_Icon from './icons/Add.svg'
import Session_Icon from './icons/Session.svg'
import Profile_Icon from './icons/Profile.svg'
import Logout_Icon from './icons/Logout.svg'
import Image from 'next/image';

//Components
import Logout from '../Buttons_tutor/Logout/Logout';
import FreePointsCard from './subComponents/FreePointsCard/FreePointsCard';

import { IoClose } from "react-icons/io5";

// Poppups
import LogoutPopup from '../Popups_tutor/BoostrapModals/LogoutPopup/MyVerticallyCenteredModal'

//Redux State
import {setSideNavBarState} from '../../Redux/tutorSlices/SideNavBar'
import { useDispatch, useSelector } from 'react-redux';

//react and nextjs imports
import { useRouter } from 'next/navigation'
import dynamic from "next/dynamic";
import Axios from '../../Axios/Axios';


const SideNavBar = ({handleMouseLeave,isSidebarOpen,handleMouseEnter}) => {

  //const {isChooseYourPlan} = useSelector((state)=> state.CreateYourPlan);
  const [modalShow, setModalShow] = useState(false);

  const router = useRouter();

  const dispatch = useDispatch();
  const handleSideNavBarClick = (value) => {
    dispatch(setSideNavBarState(value))
  }

  const LogoutHandler= async () =>{
    localStorage.removeItem("query1");
    localStorage.removeItem("query2");
    router.push("/login")
  }

    
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className='overlay'></div>
        {/* <=== Hamburger Menu ===> */}
        <div className='hamburger'>
          
        <div className='Close_Icons'><IoClose style={{fontSize:'2.2vw',color:'white'}} /></div>
        <div className='HamBurger_Icon'><Image src={Menu_Icon} alt='menu' style={{width:'1.7vw'}} /></div>
        </div>

        {/* <=== Home and Add Profile icons ===>  */}
       
        <div className='DashBoard__Container'>
        <p className='Container_heading'>DashBoard</p>
          <div className='Link_Wrapper'>
            <Image className='Icons' src={Home_Icon} alt='home'/>
            <h4 className='label'>Home</h4>
          </div>
          <div className='Link_Wrapper'>
          <Image className='Icons' src={Add_Students} alt='add student'/>
            <h4 className='label'>Add Students</h4>
          </div>
        </div>

        {/* <=== Your Batch, Create Plan, Session Scheduler ===>  */}
       
        <div className='Class__Container'>
           <p className='Container_heading'>Your Class</p>
            <div className='Link_Wrapper'>
              <Image className='Icons' src={Batch_Icon} alt='batch'/>
              <h4 className='label'>Your Batch</h4>
            </div>
            <div className='Link_Wrapper' onClick={() => router.push('/plans')}>
              <Image className='Icons' src={Add_Plan_Icon} alt='add plan'/>
              <h4 className='label'>Create your plan</h4>
            </div>
            <div className='Link_Wrapper'>
              <Image className='Icons' src={Session_Icon} alt='session'/>
              <h4 className='label'>Session Scheduler</h4>
            </div>
        </div>


        {/* <=== Get Your Free Points ===>  */}
        <div className='Settings__Container'>
        <div className='Free_point_card'> <span style={{marginBottom:'1.5vw',marginLeft:'1vw'}}><FreePointsCard /></span> </div>
           <div className='Setting'> <p className='Container_heading'>Setting</p></div>
          <div className='Link_Wrapper'>
            <Image className='Icons' alt='profile' src={Profile_Icon}/>
            <h4 className='label'>My Profile</h4>
          </div>
          <div className='Link_Wrapper'>
           
          <div className='Logout_button'> <Logout setModalShow={setModalShow}/> </div>
             
            
          <div className='Logout_icon'> <Image className='Icons' alt='logout' src={Logout_Icon}/>  </div>
            
          
          </div>
        </div>
        <LogoutPopup
            show={modalShow}
            onHide={() => setModalShow(false)}
            setModalShow={setModalShow}
            LogoutHandler={LogoutHandler}
          />
    </div>
  )
}
export default dynamic (() => Promise.resolve(SideNavBar), {ssr: false})