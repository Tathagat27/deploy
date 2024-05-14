import React from 'react'
import './styles/BasicInfo.css'

const BasicInfo = () => {
  return (
    <div className='Basic_Info_wrapper'>
        <div className='Edit__Profile_image'>
            <h4>Edit Profile Image</h4>
            <div>
              <button>Upload Experience Proof</button>
              <p>Or</p>
              <p>Drop Here</p>
            </div>
        </div>
    </div>
  )
}

export default BasicInfo