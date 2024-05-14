import React from 'react'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TemporarilyLocked.css';
import { IoClose } from "react-icons/io5";
import Image from 'next/image';
import lockcircle from './lockcircle.svg'
const TemporarilyLocked = (props) => {
  return (
    <Modal {...props} centered >
      
    <div className='Temporarily_Main_content'>
    <IoClose className='Popup_Close' onClick={() => {props.setModalShow(false)}}/>
    <div><Image className='lockcircle_icon' src={lockcircle} alt='lockcircle'/></div>

        <h4>This Option is Temporarily Locked!</h4>
        <p>Please complete your <span>profile verification</span> to <span>Unlock this Feature.</span> </p>

        
        <button >Get Verified</button>
    
    
    </div>
  </Modal>

  )
}

export default TemporarilyLocked