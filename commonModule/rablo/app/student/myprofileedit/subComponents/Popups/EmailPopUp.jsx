import React, { useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import './Modal.css'
import EmailLogo from '../../../../Images/Images_student/EmailVeri.svg';

const EmailPopUp = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <button className='main-button' onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                className="modal-cont"
                overlayClassName="modal-overlay"
            >
                <Image className='ModalLogo' src={EmailLogo} alt="alt" width={40} height={40} />
                <h2>Email Verified!</h2>
                <p>Your Email has been successfully Verified</p>
                <button onClick={closeModal}>Back to Profile</button>
            </Modal>
        </>
    );
};

export default EmailPopUp;
