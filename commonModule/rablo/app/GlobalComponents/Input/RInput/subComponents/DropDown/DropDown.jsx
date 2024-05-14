"use client"
import { useState } from 'react'
import Select from 'react-select'
import './styles/DropDown.css'
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import {setUserDetails} from '../../../../../Redux/tutorSlices/AccountCreation'

const DropDown = ({type}) => {

  const dispatch = useDispatch();
  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana",
    "Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur",
    "Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana",
    "Tripura","Uttar Pradesh","Uttarakhand","West Bengal"
  ];
  
  const [State, setState] = useState("");

  const [StatesClicked, setStatesClicked] = useState(false)

  const handleStatesChange = (items) => {
    setState(items);
    setStatesClicked(!StatesClicked)
    dispatch(setUserDetails({ key: "state", value: items }));
  }
  return (
    <div className='Dropdown_Wrapper'>
      <div className={StatesClicked ? 'Active_dropDown_Input' : 'dropDown_Input'} onClick={() => setStatesClicked(!StatesClicked)}>
          {State != "" ? 
          <div>{State} <IoClose className='Close_Icon' onClick={() => setState("")}/></div>
          :
          <h4>Select Your State</h4>
          }
      </div>

            { StatesClicked 
              ?
              <IoIosArrowUp className='Toggle_arrow' onClick={() => setStatesClicked(!StatesClicked)}/>
              :
              <IoIosArrowDown className='Toggle_arrow' onClick={() => setStatesClicked(!StatesClicked)}/> 
            }
            
            { StatesClicked &&
            <div className='States_List_Wrapper'>
              
              {indianStates.map((items,index) => (
                  <div className='States' key={index} 
                      onClick={() => handleStatesChange(items) }>
                  {items}
                  </div>
              ))}

            </div>} 
    </div>
      
  )
}

export default DropDown