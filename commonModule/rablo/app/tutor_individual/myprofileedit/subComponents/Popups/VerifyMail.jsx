import React, { useState } from 'react';
import Modal from 'react-modal'; // Import Modal from react-modal library
import Image from 'next/image';
import EmailLogo from '../../../../Images/Images_tutor/MailBlue.svg';
import './Modal.css';

const VerifyMail = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    ///// images styleing
  const emaillogoimgstyles = {
    width: "3.85vw" ,
    height: "auto" ,
  };

    return (
        <div>
            <button className='main-button mv-up' onClick={openModal}>Verify</button>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal} 
                className="verifymailmodal-cont verify"
                overlayClassName="modal-overlay"
            >
                <Image src={EmailLogo} alt="alt" width={74} height={70} style={emaillogoimgstyles}/>
                <h1 className='blue'>Verification email sent!</h1>
                <p className='blue'>This action requires email verification.Please check your inbox and follow the instructions.</p>
                <p className='blue'> </p>
                <p className='blue'>Email sent to:</p>
                <p className='bluem'>xyz@gmail.com</p>
                <button className='bluebtn' onClick={closeModal}>Ok</button>
            </Modal>
        </div>
    );
};

export default VerifyMail;
