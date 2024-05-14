import React, { useState } from 'react'
import './StudentRequest.css'
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import Close_Button from '../../../../Assets/Close_btn.svg'
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

    <div className='RequestPage_StudentRequest_wrapper' style={accepted ? {border:"2px solid #6764FF"} : {border:"none"}} key={index}>
        <h4 className='Name'>Zack Seth</h4>

        <h4 className='Class'>XII</h4>

        {/* <div className='Subjects_wrapper'>
            {item.subjects.slice(0, 3).map((subject, index) => (
              <span key={index} className='Subjects'>{subject}{index < 2 ? ', ' : ''}</span>
            ))}
            {item.subjects.length > 3 && (
              <h4>+{item.subjects.length - 3} more</h4>
            )}
        </div> */}
        <div className='Subjects_wrapper'>
              <h4 className='Subjects'>Math, Phy, Chem</h4>
        </div>

        <h4 className='Mode'>At-Home </h4>
        
        <div className='Timings'>
          <h4>4:30</h4> <p>P.M.</p>
        </div>

        <div className='Demo_Dates'>
          <div className='Weeks'><h4>M</h4><h4>T</h4><h4>W</h4><h4>Th</h4><h4>F</h4><h4>S</h4></div>
          <div className='Days'>
            <h4 className='Day_Not_selected'>1</h4> 
            <h4 className='Day_selected'>2</h4> 
            <h4 className='Day_selected'>3</h4>
            <h4 className='Day_Not_selected'>4</h4> 
            <h4 className='Day_selected'>5</h4> 
            <h4 className='Day_Not_selected'>6</h4>
          </div>
        </div>
        
        <h4 className='Plan'>Regular</h4>
        
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
            <Image onClick={() => setCloseClicked(true)} src={Close_Button} alt="cancel request" className='Close_btn'/>
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