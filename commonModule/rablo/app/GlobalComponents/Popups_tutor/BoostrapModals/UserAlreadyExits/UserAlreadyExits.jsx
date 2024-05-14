import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserAlreadyExits.css'
import Image from 'next/image';
import User from './user.svg'
import { IoClose } from "react-icons/io5";

function UserAlreadyExits(props) {
  return (
    <Modal {...props} centered >
      
      <div className='User_Exits_Main_content'>
      <IoClose className='Popup_Close' onClick={() => {props.setModalShow(false)}}/>
        <div><Image className='verified_icon' src={User} alt='logout icon'/></div>

        <h4>User Already Exits!</h4>
        <p>Your Phone Number is <span>already in use..</span></p>

        <div className='Leave_and_cancel_btn'>
          <button onClick={() => {props.setModalShow(false)}}>Change</button>
        </div> 
      </div>
    </Modal>
  );
}

export default UserAlreadyExits;