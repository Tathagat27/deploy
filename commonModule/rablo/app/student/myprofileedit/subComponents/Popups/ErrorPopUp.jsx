import React, { useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import EmailLogo from '../../../../Images/Images_student/EmailVeri.svg';
import Cross from '../../../../Images/Images_student/crossLogo.svg';

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
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                className="modal-cont"
                overlayClassName="modal-overlay"
            >
                <Image src={EmailLogo} alt="alt" width={30} height={30} />
                <h2>Oops! Something went Wrong.</h2>
                <p>Please check your provided Details Carefully.</p>
                <button className="close-button" onClick={closeModal}>
                    <Image src={Cross} alt="alt" width={20} height={20} />
                </button>
            </Modal>
        </>
    );
};

export default ErrorPopUp;
