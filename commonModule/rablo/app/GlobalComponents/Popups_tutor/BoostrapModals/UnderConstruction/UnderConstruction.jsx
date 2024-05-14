import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { IoClose } from 'react-icons/io5'
import './UnderConstruction.css'
import Image from 'next/image';
import UnderConstructionSvg from './Assets/UnderConstruction.svg'

const UnderConstruction = (props) => {
  return (
    <Modal {...props} centered >
    <div className='UnderConstruction_wrapper'>
        <IoClose className='close_btn' onClick={() => props.onHide()}/>
            <Image className='svg' src={UnderConstructionSvg} alt='this site is under construction'/>
    </div>
</Modal>
  )
}

export default UnderConstruction