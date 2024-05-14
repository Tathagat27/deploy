"use client"
import {useState} from 'react'
import './styles/ProfilePanel.css'


const ProfilePanel = ({onMouseEnter,onMouseLeave,isHovered}) => {

  

  return (
    <div className={`ProfilePanel ${isHovered ? 'hovered' : ''} ${isHovered ? 'hidden' : ''}`}>
        <div className='Profile_panel_Main_content'>
          <h4>Tutor  <br/>
          Profile <br/>
          Sample <br/></h4>
        </div>
    </div>
  )
}

export default ProfilePanel