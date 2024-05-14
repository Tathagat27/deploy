import { useState } from 'react';
import './styles/DropDown.css';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Checkbox from '../Checkbox/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { updateBoards } from '../../../../Redux/studentSlices/MyProfileEdit';

const DropDownB = ({ boards, updateBoard }) => {
  const myProfileData = useSelector(state => state.MyProfile.data);
  const dispatch = useDispatch();

  const handleChangeBoard = (newBoard) => {
    console.log(newBoard);
    dispatch(updateBoards(newBoard))
  };
  const indianStates = [
    "CBSC", "ICSC", "CISCE", "NIOS", "IB", "CIE"
  ];

  const alfa = [
    "A", "B", "C", "D", "E", "F"
  ];

  const [selectedState, setSelectedState] = useState(boards);
  const [statesClicked, setStatesClicked] = useState(false);

  return (
    <div className='Dropdown_Wrapper'>
      <div className={statesClicked ? 'Active_dropDown_Input' : 'dropDown_Input'} onClick={() => setStatesClicked(!statesClicked)}>
        {selectedState !== "" ?
          <div>{selectedState} <IoClose className='Close_Icon' onClick={() => setSelectedState("")} /></div>
          :
          <span>Select Your Board</span>
        }
      </div>

      {statesClicked ?
        <IoIosArrowUp className='Toggle_arrow' onClick={() => setStatesClicked(!statesClicked)} />
        :
        <IoIosArrowDown className='Toggle_arrow' onClick={() => setStatesClicked(!statesClicked)} />
      }

      {statesClicked &&
        <div className='States_List_Wrapper'>
          {indianStates.map((state, index) => (
            <div className='States' key={index} onClick={() => { setSelectedState(state); setStatesClicked(!statesClicked); handleChangeBoard(state) }}>
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
