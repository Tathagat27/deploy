"use client";
import { useState } from "react";
// import Select from 'react-select'
import "./styles/DropDown.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Checkbox from "../center-section/Checkbox/Checkbox";
import { alphabets } from "../data.JS";

const DropDown = ({ type ,option,setOption}) => {
  let options = [];

  if ((type === 'Select That Describes You Best')) {
    options = ['Freelancer', 'Professional Tutor', 'Both', 'None'];
  } else if ((type === 'Select Your Current Role')) {
    options = ['Student', 'Fresher', 'Employed', 'Retired', 'Self Employed'];
  } else if ((type === 'Your Highest Qualification')) {
    options = ['High School', 'Intermediate', 'Diploma', 'Graduation', 'Post-graduation'];
  } else if ((type === 'Select Your Experience')) {
    options = ['0-2 Years', '2-5 Years', '5+ Years'];
  } else if ((type === 'Select Your Expertise')) {
    options = ['All Subjects', 'Humanities', 'Science', 'Maths', 'Programming', 'Language', 'Commerce'];
  } else if ((type === 'Choose Your Job Type')) {
    options = ['Full-Time', 'Part-Time', 'Not Planned Yet'];
  } else if ((type === 'Your Preffered Mode Of Class')) {
    options = ['Online', 'Offline (at-Home)', 'Hybrid'];
  }

  // const [option, setOption] = useState("");
  const [optionClicked, setOptionClicked] = useState(false);
  return (
    <div className='Dropdown_Wrapper'>
      <div
        className={optionClicked ? "Active_dropDown_Input" : "dropDown_Input"}
        onClick={() => setOptionClicked(!optionClicked)}
      >
        {option != "" ? (
          <div>
            {option}
            <IoClose className="Close_Icon" onClick={() => setOption("")} />
          </div>
        ) : (
          <h4>{type}</h4>
        )}
      </div>

      {optionClicked ? (
        <IoIosArrowUp
          className="Toggle_arrow"
          onClick={() => setOptionClicked(!optionClicked)}
        />
      ) : (
        <IoIosArrowDown
          className="Toggle_arrow"
          onClick={() => setOptionClicked(!optionClicked)}
        />
      )}

      {optionClicked && (
        <div className="States_List_Wrapper">
          {options.map((items, index) => (
            <div
              className="States"
              key={index}
              onClick={() => {
                setOption(items);
                setOptionClicked(!optionClicked);
              }}
            >
              <Checkbox text={alphabets[index]}/>{items}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
