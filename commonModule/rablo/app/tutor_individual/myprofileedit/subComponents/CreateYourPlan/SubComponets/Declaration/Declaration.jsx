import React from 'react'
import './Declaration.css'
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaIndianRupeeSign } from "react-icons/fa6";

const Declaration = ({setSaveAndNextBtnDisabled,SaveAndNextBtnDisabled}) => {
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
          <p>If you have reviewed your selections and feel satisfied with your choices, you can simply <span> click <br/> on the "Create" button </span> located below to proceed.</p>

          <h4 className='Details'>Details</h4>
          <ul>
            <li>I will be teaching <span> 9 to 10th-grade </span> with <span>Mathematics, Science </span> +3 through <span> online <br/> mode. </span></li>
            <li>The classes will be scheduled for <span> five days a week </span> on for <span> one hour per session </span>, from <span> 4 pm <br/> to 5 pm. </span></li>
            <li>I am expecting a batch of <span> 20 students. </span></li>
            <li>The Common mode of communication will be <span> English, Hindi and Punjabi </span> </li>
            <li>The Minimum Required Sessions in a Month is <span> 22 Sessions </span> to get 100% Fee. </li>
            <li>The Salary amounting <span> INR 10,000 </span> will be <span> Auto Credited by the Company </span> at end of <br/> month.</li>
          </ul>

          <div className='Seperation_line'></div>

          <div className='Terms_and_Condition_check'>
              <input type="checkbox" id="myCheckbox" name="myCheckbox" value="checkBoxValue" onChange={() => setSaveAndNextBtnDisabled(!SaveAndNextBtnDisabled)}/>
              <label for="myCheckbox">I accept the terms and conditions and acknowledge that I have read and agree <br/> to abide by the company's policies and guidelines.</label>
          </div>

          <div className='Your_payment_per_class'>
                <h4>Your Payment Per Class </h4>
                <div>
                  <FaIndianRupeeSign className='Rupees_symbol'/>
                  <h4>220</h4>
                  <p>Per Hour</p>
                </div>
          </div>
      </div>
    </div>
  )
}

export default Declaration