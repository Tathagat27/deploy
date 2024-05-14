import { useState } from 'react';
import './styles/DropDown.css';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Checkbox from '../Checkbox/Checkbox';

const DropDownB = ({type}) => {

  const indianStates = [
    "CBSC", "ICSC","CISCE","NIOS","IB","CIE"
  ];

  const alfa = [
    "A", "B","C","D","E","F"
  ];
  
  const [selectedState, setSelectedState] = useState("");
  const [statesClicked, setStatesClicked] = useState(false);

  return (
    <div className='Dropdown_Wrapper'>
      <div className={statesClicked ? 'Active_dropDown_Input' : 'dropDown_Input'} onClick={() => setStatesClicked(!statesClicked)}>
        {selectedState !== "" ? 
          <div>{selectedState} <IoClose className='Close_Icon' onClick={() => setSelectedState("")}/></div>
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
        <div className='States_List_Wrapper'>
          {indianStates.map((state, index) => (
            <div className='States' key={index} onClick={() =>  { setSelectedState(state); setStatesClicked(!statesClicked) }}>
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
