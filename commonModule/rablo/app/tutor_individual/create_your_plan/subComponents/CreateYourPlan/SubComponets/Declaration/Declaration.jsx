import React from 'react'
import './Declaration.css'
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaIndianRupeeSign } from "react-icons/fa6";
import tutorVerification from '../../../../../../Redux/tutorSlices/tutor-verification';

const Declaration = ({setSaveAndNextBtnDisabled,SaveAndNextBtnDisabled,ModeOfClass,selectedSubjects, selectedLanguages, batchStrength, Weeks, TuitionFees, Duration, timing , s}) => {
  //  console.log(s());
  return (
    <div className='Declaration__wrapper'>
      <div>
        <h4 className='Summary_heading'>Summary</h4>
        <div className='Assured'>
              <AiOutlineSafetyCertificate/>
              <h4>Assured</h4>
        </div>
      </div>
      <div className='Declaration_main_contents'>
        <p>If you have reviewed your selections and feel satisfied with your choices, you can simply <span> click <br/> on the &quot;Create&quot; button </span> located below to proceed.</p>

          <h4 className='Details'>Details</h4>
          <ul>
            <li>I will be teaching <span> {s()} </span> with <span>{selectedSubjects.length>2?(<>{`${selectedSubjects[0]}, ${selectedSubjects[1]} `}<span> + {selectedSubjects.length-2}</span> </>):`${selectedSubjects[0]} and ${selectedSubjects[1]}`}</span>through <span> {ModeOfClass.online?"Online":"Offline"} mode. </span></li>
            <li>The classes will be scheduled for <span> {Weeks.length} days a week </span> on for <span> {"one Hour "+Duration.min.toString()+" min per session"} </span>, from <span>{timing}</span></li>
            <li>I am expecting a batch of <span> {batchStrength} students. </span></li>
            <li>The Common mode of communication will be <span> {selectedLanguages.length<2?` ${selectedLanguages[0]} `:`${selectedLanguages[0]} & ${selectedLanguages[1]}`} </span> </li>
            <li>The Minimum Required Sessions in a Month is <span> 22 Sessions </span> to get 100% Fee. </li>
            <li>The Salary amounting <span> INR 10,000 </span> will be <span> Auto Credited by the Company </span> at end of <br/> month.</li>
          </ul>

          <div className='Seperation_line'></div>

          <div className='Terms_and_Condition_check'>
              <input type="checkbox" id="myCheckbox" name="myCheckbox" value="checkBoxValue" onChange={() => setSaveAndNextBtnDisabled(!SaveAndNextBtnDisabled)}/>
              <label for="myCheckbox">I accept the terms and conditions and acknowledge that I have read and agree <br/> to abide by the company&apos;s policies and guidelines.</label>
          </div>

          <div className='Your_payment_per_class'>
                <h4>Your Payment Per Class </h4>
                <div>
                  <FaIndianRupeeSign className='Rupees_symbol'/>
                  <h4>{TuitionFees}</h4>
                  <p>Per Hour</p>
                </div>
          </div>
      </div>
    </div>
  )
}

export default Declaration