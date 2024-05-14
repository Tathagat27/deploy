"use client"
import './styles/SideNavBar.css'
import React, { useState } from 'react';
//Icons
import Menu_Icon from './icons/Menu_Icon.svg'
import Home_Icon from './icons/Home.svg'
import Add_Students from './icons/Add_Students.svg'
import Batch_Icon from './icons/Batch.svg'
import Add_Plan_Icon from './icons/Add.svg'
import Session_Icon from './icons/Session.svg'
import Profile_Icon from './icons/Profile.svg'
import Logout_Icon from './icons/Logout.svg'
import verify from './icons/verify.svg'
import verifycolor from './icons/verifycolor.svg'
import Image from 'next/image';

//Components
import Logout from '../Buttons_tutor/Logout_Blue/Logout';
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


const SideNavBar = ({handleMouseLeave,isSidebarOpen,isHovered,handleMouseEnter}) => {

  //const {isChooseYourPlan} = useSelector((state)=> state.CreateYourPlan);
  const [modalShow, setModalShow] = useState(false);
  const [auth, setAuth] = useState(false);

  const router = useRouter();
 

  const dispatch = useDispatch();
  const handleSideNavBarClick = (value) => {
    dispatch(setSideNavBarState(value))
  }

  ///// images styleing
  const menuiconimgstyles = {
    width: "1.5625vw" ,
    height: "auto" ,
  };

  const homeiconimgstyles = {
    width: "1.302vw" ,
    height: "auto" ,
  };

  const addStudentsiconimgstyles = {
    width: "0.8756vw" ,
    height: "auto" ,
    marginLeft: "0.2vw"
  };

  const verifyiconimgstyles = {
    width: "1.45vw" ,
    height: "auto" ,
  };

  const profileiconimgstyles = {
    width: "1.5625vw" ,
    height: "auto" ,
   
  };

  const logouticonimgstyles = {
    width: "1.5625vw" ,
    height: "auto" ,
  };
    
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className='overlay'></div>
        {/* <=== Hamburger Menu ===> */}
        <div className='hamburger'>
          
        <div className='Close_Icons'><IoClose style={{fontSize:'2.2vw',color:'white'}} /></div>
        <div className='HamBurger_Icon'>
          <Image 
          src={Menu_Icon} 
          style={menuiconimgstyles} 
          />
        </div>
        </div>

        {/* <=== Home and Add Profile icons ===>  */}
       
        <div className='DashBoard__Container'>
        <p className='Container_heading'>DashBoard</p>
          <div className='Link_Wrapper'>
            <Image 
            className='Icons' 
            src={Home_Icon}
            style={homeiconimgstyles}
            width={25}
            height={25}
            />
            <h4 className='label'>Home</h4>
          </div>
          <div className='Link_Wrapper'>
          <Image 
          className='Icons' 
          src={Add_Students}
          width={16.83}
          height={25}
          style={addStudentsiconimgstyles}
          />
            <h4 className='label'>Add Students</h4>
          </div>
        </div>

        {/* <=== Your Batch, Create Plan, Session Scheduler ===>  */}
       
   {auth?(<div style={{justifyContent:"flex-end"}} className='Class__Container'>
           <p className='Container_heading'>Your Class</p>
            <div className='Link_Wrapper'>
              <Image className='Icons' src={Batch_Icon}/>
              <h4 className='label'>Your Batch</h4>
            </div>
            <div className='Link_Wrapper' onClick={() => router.push('/plans')}>
              <Image className='Icons' src={Add_Plan_Icon}/>
              <h4 className='label'>Create your plan</h4>
            </div>
            <div className='Link_Wrapper'>
              <Image className='Icons' src={Session_Icon}/>
              <h4 className='label'>Session Scheduler</h4>
            </div>
        </div>):<div className='Class__Container'>
            <div className='Link_Wrapper2'>
              {!isHovered&&<Image className='Icon' src={verify} style={verifyiconimgstyles} />
              }
              <h4 className='label2'>
                
                <Image 
                className='Icon' 
                src={verifycolor} 
                style={verifyiconimgstyles}
                />
                Complete Your Profile
              </h4>
            </div>
          </div>}


        {/* <=== Get Your Free Points ===>  */}
        <div className='Settings__Container'>
         <div className='Free_point_card'> <span style={{marginBottom:'11.2969vh',marginLeft:'1vw'}}><FreePointsCard /></span> </div>
           <div className='Setting'> <p className='Container_heading marginbotm14'>Setting</p></div>
          <div className='Link_Wrapper white_background'>
            <Image 
            className='Icons' 
            src={Profile_Icon}
            style={profileiconimgstyles}/>
            <h4 className='label'>My Profile</h4>
          </div>
          <div className='Link_Wrapper'>
           
          <div className='Logout_button'> <Logout setModalShow={setModalShow}/> </div>
             
            
          <div className='Logout_icon'> 
          <Image 
          className='Icons mvright' 
          src={Logout_Icon}
          style={logouticonimgstyles}
          />  
          </div>
            
          
          </div>
        </div>
        <LogoutPopup
            show={modalShow}
            onHide={() => setModalShow(false)}
            setModalShow={setModalShow}
          />
    </div>
  )
}
export default dynamic (() => Promise.resolve(SideNavBar), {ssr: false})