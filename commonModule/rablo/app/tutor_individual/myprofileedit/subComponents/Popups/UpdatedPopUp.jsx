import React, { useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import './Modal.css'
import Link from 'next/link'
import EmailLogo from '../../../../Images/Images_tutor/EmailVeriBlue.svg';
import Cross from '../../../../Images/Images_tutor/CrossLogoBlue.svg';

const ErrorPopUp = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button className='main-btn' onClick={openModal}>Save</button>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                className="updatedmodal-cont"
                overlayClassName="modal-overlay"
               
            >
                <button className="close-btn" onClick={closeModal}>
                    <Image src={Cross} alt="alt" width={20} height={20} />
                </button>

                <Image src={EmailLogo} alt="alt" width={40} height={40} />
                <h2>Updated!</h2>
                <p>Your Profile has been successfully Updated</p>
                <Link href='plans'><button onClick={closeModal}>Back to Profile</button></Link>
                
                
                
            </Modal>
        </>
    );
};

export default ErrorPopUp;
