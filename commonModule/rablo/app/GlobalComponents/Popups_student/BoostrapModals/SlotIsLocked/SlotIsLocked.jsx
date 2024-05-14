
import React from 'react'
import Modal from 'react-bootstrap/Modal';
import './SlotIsLocked.css'
import { IoClose } from 'react-icons/io5'

function SlotIsLocked (props) {
  return (
    <Modal {...props} centered >
        <div className='SlotLoacked_main_wrapper'>
            <IoClose className='close_btn' onClick={() => props.onHide()}/>
                <h4>This slot is locked !</h4>
                <p>If you need to unlock the slot ?</p>
                <div>
                    <button onClick={() => props.onHide()}>Cancel</button>
                    <button>Buy NOW</button>
                </div>
        </div>
    </Modal>
  )
}

export default SlotIsLocked