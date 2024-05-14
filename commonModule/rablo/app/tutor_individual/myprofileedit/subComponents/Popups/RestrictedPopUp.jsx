import React, { useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import './Modal.css'
import Link from 'next/link'
import LockedLogo from '../../../../Images/Images_tutor/LockedBlue.svg';
import Cross from '../../../../Images/Images_tutor/CrossLogoBlue.svg';

const RestrictedPopUp = ({closetab}) => {
    const [isOpen, setIsOpen] = useState(true);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    ///// images styleing
  const lockedlogoimgstyles = {
    width: "2.6vw" ,
    height: "auto" ,
  };

    return (
        <>
            {/* <button className='main-btn' onClick={openModal}>Save</button> */}
            <Modal
                isOpen={isOpen}
                onRequestClose={() => {
                    closeModal();
                    closetab();
                }}
                className="modal-cont"
                overlayClassName="modal-overlay"
            >
                <Image src={LockedLogo} alt="alt" width={50} height={50} style={lockedlogoimgstyles}/>
                <h2>This option is Temporarly Locked!</h2>
                <p>Please complete your <b>Profile Verification </b>to <b>Unlock this Feature.</b></p>
                <Link href='myprofileedittutor'><button onClick={closeModal} className='getveribtn'>Get Verified</button></Link>
                
                <button className="close-btn" onClick={() => {
                    closeModal();
                    closetab();
                }}>
                    <Image src={Cross} alt="alt" width={18} height={18} />
                </button>
                
            </Modal>
        </>
    );
};

export default RestrictedPopUp;
