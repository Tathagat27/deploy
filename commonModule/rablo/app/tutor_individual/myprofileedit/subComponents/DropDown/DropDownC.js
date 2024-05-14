"use client"
import { useState } from 'react'
import'./styles/DropDown.css'
import './styles/DropDown.css'
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Checkbox from '../Checkbox/Checkbox';

const DropDownC = ({type}) => {

  const indianStates = [
    "Pre-Primary", "Class 1","Class 2","Class 3","Class 4","Class 5","Class 6",
     "Class 7","Class 8","Class 9","High School","Junior Year-11th",
     "Senior Year-12th"
  ];
  const alfa = [
    "A", "B","C","D","E","F","G","H","I","J","K","L","M",
  ];
  
  const [State, setState] = useState("");

  const [StatesClicked, setStatesClicked] = useState(false)
  return (
    <div className='Dropdown_Wrapper'>
      <div className={StatesClicked ? 'Active_dropDown_Input' : 'dropDown_Input'} onClick={() => setStatesClicked(!StatesClicked)}>
          {State != "" ? 
          <div>{State} <IoClose className='Close_Icon' onClick={() => setState("")}/></div>
          :
          <span>Select The Class Of Reference</span>
          }
      </div>

            { StatesClicked ?
              <IoIosArrowUp className='Toggle_arrow' onClick={() => setStatesClicked(!StatesClicked)}/>
              :
              <IoIosArrowDown className='Toggle_arrow' onClick={() => setStatesClicked(!StatesClicked)}/> }
            
            { StatesClicked &&
            <div className='States_List_Wrapper'>
              {indianStates.map((items,index) => (
                  <div className='States' key={index} onClick={() =>
                    { setState(items);
                      setStatesClicked(!StatesClicked)}
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