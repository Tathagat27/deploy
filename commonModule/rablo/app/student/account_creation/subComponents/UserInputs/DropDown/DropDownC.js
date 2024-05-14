"use client"
import { useState,useEffect } from 'react'
import'./styles/DropDown.css'
import './styles/DropDown.css'
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Checkbox from '../Checkbox/Checkbox';
//Redux
import { setUserDetails } from '../../../../../Redux/studentSlices/StudentAccountCreation';
import { useDispatch, useSelector } from 'react-redux';

const DropDownC = () => {
  const dispatch = useDispatch();
  const indianClasss = [
    "Pre-Primary", "Class 1","Class 2","Class 3","Class 4","Class 5","Class 6",
     "Class 7","Class 8","Class 9","High School","Junior Year-11th",
     "Senior Year-12th"
  ];
  const alfa = [
    "A", "B","C","D","E","F","G","H","I","J","K","L","M",
  ];
  
  const [Class, setClass] = useState("");
  const [ClasssClicked, setClasssClicked] = useState(false)



  return (
    <div className='Dropdown_Wrapper'>
      <div className={ClasssClicked ? 'Active_dropDown_Input' : 'dropDown_Input'} onClick={() => setClasssClicked(!ClasssClicked)}>
          {Class != "" ? 
          <div>{Class} <IoClose className='Close_Icon' onClick={() => setClass("")}/></div>
          :
          <span>Select The Class Of Reference</span>
          }
      </div>

            { ClasssClicked ?
              <IoIosArrowUp className='Toggle_arrow' onClick={() => setClasssClicked(!ClasssClicked)}/>
              :
              <IoIosArrowDown className='Toggle_arrow' onClick={() => setClasssClicked(!ClasssClicked)}/> }
            
            { ClasssClicked &&
            <div className='Class_List_Wrapper'>
              {indianClasss.map((items,index) => (
                  <div className='Class' key={index} onClick={() =>
                    { setClass(items);
                      dispatch(setUserDetails({ key: "Class", value: index }));
                      setClasssClicked(!ClasssClicked)}
                  }>
                    <Checkbox text={alfa[index]}/>
                    {items}
                    </div>
              ))}
            </div>} 
            

    </div>
      
  )
}

export default DropDownC