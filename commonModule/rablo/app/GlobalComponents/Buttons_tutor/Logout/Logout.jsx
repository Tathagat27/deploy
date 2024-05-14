import React from 'react'
import './styles/Logout.css'
import { AiOutlineLogout } from "react-icons/ai";
const Logout = ({setModalShow}) => {
  return (
    <div className='logout_btn' onClick={() => {setModalShow(true)}}>
        <AiOutlineLogout className='logout-icon'/>
        <p className='ajak'>Logout</p>
    </div>
  )
}

export default Logout