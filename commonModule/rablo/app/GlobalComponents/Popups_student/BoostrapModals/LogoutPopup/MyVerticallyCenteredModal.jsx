import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './Vertical.css'
import Image from 'next/image';
import Logout from './logout.svg'
import { IoClose } from "react-icons/io5";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal {...props} centered >
      
      <div className='Vertical_Main_content'>
      <IoClose className='Popup_Close' onClick={() => {props.setModalShow(false)}}/>
        <div><Image className='logout_icon' src={Logout} alt='logout icon'/></div>

        <h4>Leaving So Soon?</h4>
        <p>You will be logged out from the account</p>

        <div className='Leave_and_cancel_btn'>
          <button >Leave</button>
          <button onClick={() => {props.setModalShow(false)}}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;