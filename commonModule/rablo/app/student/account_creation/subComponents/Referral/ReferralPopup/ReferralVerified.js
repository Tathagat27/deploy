import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './ReferralVerified.css';
import Image from 'next/image';
import { GoVerified } from "react-icons/go";

const ReferralVerified = ({ onHide, ...props }) => {
  return (
    <Modal {...props} centered onHide={onHide}>
      <div className='overlay'></div>
      <div className='Referral_Verified_Main_content'>
        <div><GoVerified className='verified_icon' /></div>
        <h4>Verified!</h4>
        <p>Your Referral Code has been Verified.</p>
        <button onClick={onHide}>Proceed</button>
      </div>
    </Modal>
  );
}

export default ReferralVerified;
