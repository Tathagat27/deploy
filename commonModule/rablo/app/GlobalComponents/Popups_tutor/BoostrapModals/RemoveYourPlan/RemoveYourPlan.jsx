import './RemoveYourPlan.css'
import { IoClose } from 'react-icons/io5'
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image';
import BagIcon from './bag.svg'
const RemoveYourPlan = (props) => {
  return (
    <Modal {...props} centered >
    <div className='RemovePlan_main_wrapper'>
        <IoClose className='close_btn' onClick={() => props.onHide()}/>
        <div><Image src={BagIcon} alt='remove icon'/></div>
            <h4>Want to Remove your Plan?</h4>
            <p> This Plan will take <span> 15 Days </span> to be removed due to </p>
            <p>incomplete business cycle.</p>

            <div>
                <button>Remove</button>
                <button onClick={() => props.onHide()}>Cancel</button>
            </div>
            
    </div>
    </Modal>
  )
}

export default RemoveYourPlan