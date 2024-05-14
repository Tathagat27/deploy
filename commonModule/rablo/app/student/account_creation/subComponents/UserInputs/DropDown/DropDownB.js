"use client"
import { useState,useEffect } from 'react';
import './styles/DropDownB.css';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Checkbox from '../Checkbox/Checkbox';
import { setUserDetails } from '../../../../../Redux/studentSlices/StudentAccountCreation';
import { useDispatch, useSelector } from 'react-redux';

const DropDownB = () => {

  const dispatch = useDispatch();
  const indianStates = [
    "CBSC", "ICSC","CISCE","NIOS","IB","CIE"
  ];

  const alfa = [
    "A", "B","C","D","E","F"
  ];
  
  const [Board, setBoard] = useState("");
  const [statesClicked, setStatesClicked] = useState(false);

  useEffect(()=>{
    dispatch(setUserDetails({ key: "boards", value: Board }));
  },[Board])

  return (
    <div className='Dropdown_Wrapper'>
      <div className={statesClicked ? 'Active_dropDown_Input' : 'dropDown_Input'} onClick={() => setStatesClicked(!statesClicked)}>
        {Board !== "" ? 
          <div>{Board} <IoClose className='Close_Icon' onClick={() => setBoard("")}/></div>
          :
          <span>Select Your Board</span>
        }
      </div>

      { statesClicked ?
        <IoIosArrowUp className='Toggle_arrow' onClick={() => setStatesClicked(!statesClicked)}/>
        :
        <IoIosArrowDown className='Toggle_arrow' onClick={() => setStatesClicked(!statesClicked)}/> 
      }

      { statesClicked &&
        <div className='Board_List_Wrapper'>
          {indianStates.map((state, index) => (
            <div className='Board' key={index} onClick={() =>  { setBoard(state); setStatesClicked(!statesClicked) }}>
              <Checkbox text={alfa[index]} />
              {state}
            </div>
          ))}
        </div>
      } 
    </div>
  );
}

export default DropDownB;
