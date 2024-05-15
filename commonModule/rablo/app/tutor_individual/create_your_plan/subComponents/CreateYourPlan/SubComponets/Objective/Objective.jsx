import React, { useEffect, useState } from 'react'
import './Objective.css'
import { FiPlus } from "react-icons/fi";
const Objective = ({OutcomeClick,setObjectiveClick,setOutcomeClick,ObjectiveClick}) => {
  const [objectives, setObjectives] = useState([]);
  const [Outcome,setOutcome]=useState([]);

  const [Options1,setOptions1] = useState(
    ["To make concepts clear and build a strong foundation of the subject",
    "To make students industry ready","It will be a crash course ",
      "Support high-achieving students to reach full potential.",
      "To prepare the students for the upcoming exams in an organized manner",
      "To help every student achieve mastery of the subject matter by the end of the semester.",
      "Improve exam scores by 20% or more.","Maintain a 90%+ class Result average.",
      "Foster critical thinking, problem-solving, and creativity.","Foster a love of learning through engaging methods."
    ])
    const [ Options2,setOption2 ] = useState ([ "Subject mastery, deeper understanding, and real-world application.",
    "Love of learning, curiosity, and personal growth",
    "Critical thinking, problem-solving, and analytical skills",
    "Elevated academic performance and career opportunities",
    "Social responsibility and leadership skills development",
    "Effective study habits and time management skills development",
    ])
    // <=== Objectives Related functions and States ===>

    // const [objectives, setObjectives] = useState([]);
    const [inputValue, setInputValue] = useState('');
    

    const handleOptionsClick = (index) => {
      if(objectives.includes(index)){
        setObjectives(objectives.filter((items) => items != index))
      }else{
        setObjectives([...objectives, index]);
        setObjectiveClick([...ObjectiveClick,Options1[index]])
      }
    };
    const handleAddOption = () =>{
      if(inputValue != ''){
        setOptions1([...Options1,inputValue]);
        setInputValue('')
      }
      setOthersInput(!othersInput)
    }

  
    const handleOthersObjective = (e) =>{
     
      
    }
     
    

    // <=== Outcome Related functions and States ===>
    
    // const [Outcome, setOutcome] = useState([]);
    const [othersInput, setOthersInput] = useState(false);
    const [OutcomeinputValue, setOutcomeinputValue] = useState('');
    const handleOutcomeOptionsClick = (index) => {
      if(Outcome.includes(index)){
        setOutcome(Outcome.filter((items) => items != index))
      }else{
        setOutcome([...Outcome, index]);
        setOutcomeClick([...OutcomeClick,Options2[index]])
      }
    };
    const handleOutcomeAddOption = () =>{
      if(OutcomeinputValue != ''){
        setOption2([...Options2,OutcomeinputValue]);
        setOutcomeinputValue('')
      }
      setOthersInput(!othersInput)
    }

  return (
    <div className='Objective__wrapper'>
      <div className='Objective_Section_1'>
      <h4 className='Objective_Section_heading'>1: What will the Objective of Complete Course? </h4>
      <p className='Objective_Section_description'> <span className='highlight'>Choose the best suitable objective </span> from the given Options or you can add your custom <br/> objective by clicking on <span className='highlight'> add button.</span></p>

      <div className='Objective_Complete_course'>
            {Options1?.map((items,index)=>(
              <div key={index} className={objectives.includes(index) ? 'Active_Clickable_Options' : 'Clickable_Options'} 
                   onClick={() => handleOptionsClick(index)}>{items}
              </div>
            ))}
      </div>
        <div className='Others_Objective'>
            <p onClick={() => setOthersInput(!othersInput)}> Others </p> 
            {othersInput && 
            <input 
            className='Other_input' 
            style={inputValue.length > 12 ? { width: inputValue.length + 15 + 'vh' }  : { width: '12vw' } }
            placeholder='Type' 
            maxLength={70} 
            onChange={(e) => setInputValue(e.target.value)} 
            />
            }
            {othersInput &&
            <FiPlus className='Plus_icon' onClick={() => handleAddOption() } /> }
        </div>
      </div>
      <div className='Objective_Section_2'>
            <h4 className='Objective_Section_heading'>2: What will the Outcome of Complete Course? </h4>
            <p className='Objective_Section_description'> <span className='highlight'>Choose the best suitable Outcomes </span> for the students to achieve from the given Options or <br/> you can add your custom outcomes by clicking on <span className='highlight'> add button.</span></p>

            <div className='Objective_Complete_course'>
              {Options2?.map((items,index)=>(
                <div key={index} className={Outcome.includes(index) ? 'Active_Clickable_Options' : 'Clickable_Options'} 
                     onClick={() => handleOutcomeOptionsClick(index)}>{items}
                </div>
              ))}
            </div>
            <div className='Others_Objective'>
                  <p onClick={() => setOthersInput(!othersInput)}> Others </p> 
                  {othersInput && 
                  <input className='Other_input'
                  style={OutcomeinputValue.length > 12 ? { width: OutcomeinputValue.length + 15 + 'vh' }  : { width: '12vw' } }
                  placeholder='Type' 
                  maxLength={70}  
                   onChange={(e) => setOutcomeinputValue(e.target.value)}
                   />}
                  {othersInput &&
                  <FiPlus className='Plus_icon' onClick={() => handleOutcomeAddOption() } /> }
            </div>
      </div>
    </div>
  )
}

export default Objective