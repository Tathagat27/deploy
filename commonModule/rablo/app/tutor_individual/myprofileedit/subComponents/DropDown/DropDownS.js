"use client"
import { useState } from 'react'
import'./styles/DropDown.css'
import './styles/DropDown.css'
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Checkbox from '../Checkbox/Checkbox';

const DropDownS = ({type}) => {
  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana",
    "Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur",
    "Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana",
    "Tripura","Uttar Pradesh","Uttarakhand","West Bengal"
  ];
 
  const alfa = [
    "A", "B","C","D","E","F","G","H","I","J","K","L","M","N", "O","P","Q","R","S","T","U","V","W","X","Y","Z",
  ];
  
  const [State, setState] = useState("");

  const [StatesClicked, setStatesClicked] = useState(false)
  return (
    <div className='Dropdown_Wrapper'>
      <div className={StatesClicked ? 'Active_dropDown_Input' : 'dropDown_Input'} onClick={() => setStatesClicked(!StatesClicked)}>
          {State != "" ? 
          <div>{State} <IoClose className='Close_Icon' onClick={() => setState("")}/></div>
          :
          <span>Select Your State</span>
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

export default DropDownS