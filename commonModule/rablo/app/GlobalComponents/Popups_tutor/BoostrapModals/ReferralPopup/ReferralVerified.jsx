import React from 'react'
import './ReferralVerified.css'
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image';
import { GoVerified } from "react-icons/go";

const ReferralVerified = (props) => {
  return (
    <Modal {...props} centered >
      
      <div className='Referral_Verified_Main_content'>
            <div><GoVerified className='verified_icon'/></div>
            <h4>Verified!</h4>
            <p>Your Referral Code has ben Verified.</p>
            <button onClick={() => props.onHide()}>Proceed</button>
        </div>
    </Modal>
  )
}

export default ReferralVerified