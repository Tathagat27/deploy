import React, { useState,useEffect } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import './Modal.css'
import Link from 'next/link'
import EmailLogo from '../../../../Images/Images_student/EmailVeri.svg';
import Cross from '../../../../Images/Images_student/crossLogo.svg';
import { useDispatch, useSelector } from 'react-redux';
// import { setDataMyProfile } from '@/app/Redux/Slices/MyProfile';
import axios from 'axios'

const UpdatePopUp = ({ email, phoneNumber, addressLine1, guardianMobNumber, schoolName }) => {
    const myProfileData = useSelector(state => state.MyProfile.data)
    const myProfileEditData = useSelector(state => state.MyProfileEdit.data);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [updatedClass, setUpdatedClass] = useState(myProfileEditData.class_);
    const [updatedBoards, setUpdatedBoards] = useState(myProfileEditData.boards);

    useEffect(() => {
        // console.log(updatedClass, updatedBoards)
        setUpdatedBoards(myProfileEditData.boards)
        setUpdatedClass(myProfileEditData.class_)
    })

    const UpdateUrl = 'http://localhost:5500/api/updateStudent';

    const handleOverChange = () => {
        const postData = {
            studentId: myProfileData.studentId,
            data: {
                email, phoneNumber, addressLine1, guardianMobNumber, class_: updatedClass,
                boards: updatedBoards, schoolName
            }
        };

        fetch(UpdateUrl, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Response:', data);
            })
            .catch(error => {
                console.error('Error:', error.message);
            });
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button className='main-btn' onClick={() => { handleOverChange(); openModal(); }}>Save</button>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                className="modal-cont"
                overlayClassName="modal-overlay"
            >
                <Image src={EmailLogo} alt="alt" width={40} height={40} />
                <h2>Updated!</h2>
                <p>Your Profile has been successfully Updated</p>
                <Link href='plans'><button onClick={closeModal}>Back to Profile</button></Link>

                <button className="close-btn" onClick={closeModal}>
                    <Image src={Cross} alt="alt" width={20} height={20} />
                </button>

            </Modal>
        </>
    );
};

export default UpdatePopUp;

