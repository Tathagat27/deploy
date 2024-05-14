import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NumberVerified.css'
import Image from 'next/image';
import Verify from './verify.svg'


function UserAlreadyExits(props) {
    

  return (
    <Modal {...props} centered >
      
      <div className='User_Exits_Main_content'>
        <div><Image className='logout_icon' src={Verify} alt='logout icon'/></div>

        <h4>Verified!</h4>
        <p>Your Phone Number has ben Verified.</p>

        <div className='Leave_and_cancel_btn'>
          <button onClick={() => {props.setModalShow(false)}}>Proceed</button>
        </div> 
      </div>
    </Modal>
  );
}

export default UserAlreadyExits;