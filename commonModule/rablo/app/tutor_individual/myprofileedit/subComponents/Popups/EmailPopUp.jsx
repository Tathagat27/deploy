import React, { useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import './Modal.css'
import EmailLogo from '@/Images/EmailVeriBlue.svg';

const EmailPopUp = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    ///// images styleing
  const emailLogoimgstyles = {
    width: "2.083vw" ,
    height: "auto" ,
    margin: "0 12.34vw 1.759vh 12.39vw"
  };

    return (
        <>
            <button className='main-button' onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                className="emailmodal-cont"
                overlayClassName="modal-overlay"
            >
                <Image className='ModalLogo' src={EmailLogo} alt="alt" width={40} height={40} style={emailLogoimgstyles} />
                <h2>Email Verified!</h2>
                <p>Your Email has been successfully Verified</p>
                <button onClick={closeModal}>Back to Profile</button>
            </Modal>
        </>
    );
};

export default EmailPopUp;
