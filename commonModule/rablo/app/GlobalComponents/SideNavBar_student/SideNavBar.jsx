"use client"
import './styles/SideNavBar.css'
import Menu_Icon from './icons/Menu_icon.svg'
import Home_Icon from './icons/Home.svg'
import Add_Students from './icons/Add_students.svg'
import Student from './icons/Student Work On Laptop.svg'
import Profile_Icon from './icons/Profile.svg'
import Logout_Icon from './icons/Logout.svg'
import Image from 'next/image';
import { useState } from 'react';
import Modal from 'react-modal';

//Components
import Logout from '../Buttons_student/Logout/Logout';
import FreePointsCard from './subComponents/FreePointsCard/FreePointsCard';
import LogoutPopUp from '../Popups_student/BoostrapModals/LogoutPopup/MyVerticallyCenteredModal'

import { IoClose } from "react-icons/io5";
import Post from './subComponents/FreePointsCard/Post';
import { useSelector, useDispatch } from "react-redux";
import { setSideNavBarState,setShowModal } from '../../Redux/studentSlices/SideNavBar';
import PostNeed from '../Popups_student/PostYourNeed/PostNeed'
import { useRouter } from 'next/navigation'

const SideNavBar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [active ,setActive] = useState('Dashboard');
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sideNavBar.isSidebarOpen);

  const openSidebar = () => {
    dispatch(setSideNavBarState(true));
  }  
  const Sliderbarclose = () => {
    dispatch(setSideNavBarState(false));
  }
  const router = useRouter();
  const LogoutHandler= async () =>{
    if (typeof window !== 'undefined') {
    localStorage.removeItem("query1");
    localStorage.removeItem("query2");
    }
    router.push("/login")
  }
  

  return (
    <>
       <div onMouseOverCapture={openSidebar} onMouseOutCapture={Sliderbarclose} className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className='overlay'></div>
        {/* <=== Hamburger Menu ===> */}
        <div className='hamburger'>
          
          <div className='Close_Icons'><IoClose style={{fontSize:'2.2vw',color:'white'}} /></div>
          <div className='HamBurger_Icon'><Image src={Menu_Icon} style={{width:'1.7vw'}} /></div>
          </div>

        {/* <=== Home and Add Profile icons ===>  */}
        <p className='Class_heading'>Hi! Max</p> 
       <div className='wrapper_div'>
        <div className='DashBoard__Container'>
         
          <div className={active=="Dashboard"?'active Link_Wrapper' :'Link_Wrapper' }>
           { active=="Dashboard"&&<div style={{width:"0.8vh", height:"100%", backgroundColor:"white", position:"relative", left:"0"}}></div>}
            <div style={{display:"flex", alignItems:"center",margin:"0 auto"}}>
            <Image className='Icons' src={Home_Icon}/>
            <h4 className='label'>DashBoard</h4>
            </div>
           
          </div>
          <div className='Link_Wrapper'>
          <div style={{display:"flex", alignItems:"center",margin:"0 auto"}}>
          <Image className='Icons' src={Add_Students} alt="add_student"/>
            <h4 className='label'>Add Tutor</h4>
            </div>
          </div>
          <div className='Link_Wrapper'>
          <div style={{display:"flex", alignItems:"center",margin:"0 auto"}}>
            <Image className='Icons' src={Student}/>
            <h4 className='label'>My Class</h4>
            </div>
          </div>
          <div className='Link_Wrapper'>
          <div style={{display:"flex", alignItems:"center",margin:"0 auto"}}>
            <Image className='Icons' src={Profile_Icon}/>
            <h4 className='label'>My Profile</h4>
            </div>
          </div>
        </div>

        {/* <=== Your Batch, Create Plan, Session Scheduler ===>  */}
       
       <div className='Post' onClick={()=>setIsOpen(true)}>
       <Post/>
       </div>

          
       

        {/* <=== Get Your Free Points ===>  */}
        <div className='FreePointsCard'>
        <FreePointsCard />    
        </div>
        </div>
        <div className='logout'>
           
           <div className='logout_div'>
           <Logout LogoutHandler={LogoutHandler}/>
           </div>
             
           
           <Image className='Icons_logout' src={Logout_Icon}/>
           
         
         </div>
         
    </div>
    <PostNeed modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
    </>
   
  )
}

export default SideNavBar