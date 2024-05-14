import React, { useState } from 'react'
import './StudentRequest.css'
import CloseButton from '../../../../Assets/Close_btn.svg'
import { FaRupeeSign } from "react-icons/fa";
import Image from 'next/image';



const StudentRequest = () => {

  const [data, setData] = useState([
    {
      id:1,
      name: "Zack Seth",
      standard: "XII",
      subjects: ["Math", "Phy", "Chem"],
      maxBudget: 2500,
      Match: 87,
      Success: "10 / 10"
    },
    {
      id:1,
      name: "Alice Smith",
      standard: "X",
      subjects: ["Bio", "His", "Eng"],
      maxBudget: 2000,
      Match: 75,
      Success: "8 / 10"
    },
    {
      id:1,
      name: "John Doe",
      standard: "XI",
      subjects: ["Com Sci", "Econo", "Geo"],
      maxBudget: 2800,
      Match: 95,
      Success: "9 / 10"
    }
  ])
  const [closeClicked, setCloseClicked] = useState(false);
  const [accepted, setAccepted] = useState(false);
  
  return (
    <>
    {
      data.map((item, index) => (

    <div className='StudentRequest_wrapper' style={accepted ? {border:"2px solid #6764FF"} : {border:"none"}} key={index}>
        <h4 className='Name'>{item.name}</h4>

        <h4 className='Class'>{item.standard}</h4>

        <div className='Subjects_wrapper'>
            {item.subjects.slice(0, 3).map((subject, index) => (
              <span key={index} className='Subjects'>{subject}{index < 2 ? ', ' : ''}</span>
            ))}
            {item.subjects.length > 3 && (
              <h4>+{item.subjects.length - 3} more</h4>
            )}
        </div>



        <div className='MaxBudget'>
            <FaRupeeSign className='rupees'/>
            <h4>{item.maxBudget} </h4>
            <span>Per Month</span>
        </div>
        
        <h4 className='Match'>{item.Match}%</h4>
        
        <h4 className='success'>{item.Success}</h4>
        
        <div className='Accept_or_Close'>
          {
            closeClicked ?
            <h4 onClick={() => setCloseClicked(false)} className='cancel_or_remove'>Remove</h4>
            :
            accepted ?
            <h4 onClick={() => setAccepted(false)} className='cancel_or_remove'>Cancel</h4>
          :
          <>
            <button onClick={() => setAccepted(true)} className='accept_btn'>Accept</button>
            <Image onClick={() => setCloseClicked(true)} src={CloseButton} alt="cancel request" className='Close_btn'/>
          </>
        }
        </div>
    </div>
     ))
    }
    </>
  )
}

export default StudentRequest