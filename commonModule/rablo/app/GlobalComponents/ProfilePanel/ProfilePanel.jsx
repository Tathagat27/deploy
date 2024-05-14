"use client"
import {useState} from 'react'
import './styles/ProfilePanel.css'


const ProfilePanel = ({toggleSidebar,isSidebarOpen,setIsSidebarOpen}) => {

  

  return (
    <div className='ProfilePanel' style={isSidebarOpen ? {display:"none"} : {display:"flex"}}>
        <div className='Profile_panel_Main_content'>
          <h4>Tutor  <br/>
          Profile <br/>
          Sample <br/></h4>
        </div>
    </div>
  )
}

export default ProfilePanel