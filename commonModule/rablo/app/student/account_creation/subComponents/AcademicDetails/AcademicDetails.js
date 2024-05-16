import React, { useEffect, useState } from 'react';
import style from '../PersonalDetails/Personal.module.scss';
import addressStyle from '../AddressDetails/Address.module.scss';
import academicStyle from './Academic.module.scss';

import DropDownB from '../UserInputs/DropDown/DropDownB';
import DropDownC from '../UserInputs/DropDown/DropDownC';

// Redux imports
import { setUserDetails } from '../../../../Redux/studentSlices/StudentAccountCreation';
import { useDispatch, useSelector } from 'react-redux';

const AcademicDetails = ({ handleNext }) => {
  const SubjectsArray = ["English", "Hindi", "Biology", "Chemistry", "Political Science", "Computer Science", "Accountancy", "Geography", "Economics", "Mathematics", "Physical Education", "Social Science", "Business", "Physics"];
  const [Subject, setSubject] = useState([]);

  const {schoolName, Class, boards, subjects} = useSelector((state) => state.StudentAccountCreation)
  const [enableButton,setEnableButton] = useState(true);
  // console.log(schoolName, Class, boards, subjects);

  const handleSubmission = () =>{

    if( schoolName && Class && boards && subjects.length > 0 ){
      handleNext("userInputDone")
    }else{
      alert("Please fill out all required fields.");
    } 
  }
  useEffect(() =>{
    if( schoolName && Class >=0 && boards && subjects.length > 0 ){
      setEnableButton(true)
    }
  },[schoolName, Class,boards,subjects])


  const addSubject = (lang) => {
    setSubject([...Subject, lang]);
  };

  const isSubjectPresent = (lang) => {
    return Subject.includes(lang);
  };

  const removeSubject = (lang) => {
    const updatedSubject = Subject.filter((language) => language !== lang);
    setSubject(updatedSubject);
  };

  //redux dispatch functions
  const dispatch = useDispatch();
  const handleInputChange = (key, value) => {
    dispatch(setUserDetails({ key: key, value: value }));
  };
  useEffect(() =>{
    dispatch(setUserDetails({ key: "subjects", value: Subject }));
  },[Subject])

 

  return (
    <div className={academicStyle.Wrapper}>
      <div className={addressStyle.Input__Section}>
        <label className={style.label}>School</label>
        <input
          className={academicStyle.Input}
          type="text"
          placeholder='School Name'
          maxLength={50}
          onChange={(e) => handleInputChange("schoolName",e.target.value) }
        />
      </div>

      <div className={style.Input__Section}>
        <div className={style.Input__wrapper}>
          <label className={style.label}>Class</label>
          <DropDownC handleInputChange={handleInputChange}/>
        </div>
        <div className={style.Input__wrapper}>
          <label className={style.label}>Boards</label>
          <DropDownB handleInputChange={handleInputChange}/>
        </div>
      </div>

      <div className={academicStyle.subjects__wrapper}>
        <label className={style.label} style={{ marginTop: "0.875vw" }}>Subjects You Study</label>
        <div className={academicStyle.Input__wrapper}>
          {SubjectsArray.map((option, idx) => (
            <div
              key={idx}
              onClick={() => {
                isSubjectPresent(option) ? removeSubject(option) : addSubject(option);
              }}
              style={isSubjectPresent(option) ? { backgroundColor: "#EC5F70", color: "white" } : null}
              className={academicStyle.Subject__label}
            >
              {option}
            </div>
          ))}
        </div>
      </div>

      <div className={academicStyle.Input__Button__Section}>
        <button onClick={() => handleSubmission()} className={style.button}
        style={
          enableButton ?
          {cursor:'pointer'} :
          {cursor:'not-allowed',color:"#666",background: "#ccc"}
        }
        >Next</button>
      </div>
    </div>
  );
}

export default AcademicDetails;
