import React from 'react'
import './styles/Logout.css'
import { AiOutlineLogout } from "react-icons/ai";
const Logout = ({LogoutHandler}) => {
  return (
    <div className='logout_btn' onClick={() => LogoutHandler()}>
        <AiOutlineLogout className='logout-icon'/>
        <p className='ajak'>Logout</p>
    </div>
  )
}

export default Logout