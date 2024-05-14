import React, { useState } from 'react';
import Modal from 'react-modal'; // Import Modal from react-modal library
import Image from 'next/image';
import EmailLogo from '../../../../Images/Images_student/Mail.svg';

const VerifyMail = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button className='main-button' onClick={openModal}>Verify</button>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal} 
                className="modal-cont verify"
                overlayClassName="modal-overlay"
            >
                <Image src={EmailLogo} alt="alt" width={60} height={60} />
                <h1 className='pink'>Verification email sent!</h1>
                <p className='pink'>This action requires email verification.</p>
                <p className='pink'> Please check your inbox and follow the instructions.</p>
                <p className='pink'>Email sent to:</p>
                <p className='pinkm'>xyz@gmail.com</p>
                <button className='pinkbtn' onClick={closeModal}>Ok</button>
            </Modal>
        </div>
    );
};

export default VerifyMail;
