import {useState} from 'react'
import { FaChevronDown,FaCheck  } from "react-icons/fa6";
import './ClassSections.css'

const ClassSections = () => {

    const [isActive, setIsActive] = useState({
        A:false,
        B:false,
        C:false,
        D:false,
        E:false,
        F:false,
        G:false,
    });
    const handleClick = (key) => {
        setIsActive(prevState => ({
            ...prevState,
            [key]: !prevState[key]
          }));
        };

  return (
    <div className='Section_1'>
    <div className='Section_1_main_content'>
        <h4 className='Section_heading'>1: Select the Section of Class you want to teach? </h4>
        <p className='Section_description'>{"Choosing a class section can attract students falling under that range. The "} <br/>{"first student's preference automatically selects the exact standard. "} <br/>{"For example, if the first student is from 4th standard, selecting the primary "}<br/> {"section will auto-select 4th standard as the primary class for that student."}</p>
    <div className='Types_of_SectionClass'>

            <button className={isActive.A === true ? 'active' : 'Section1_option'} onClick={()=>handleClick("A")}>
                <span>{isActive.A === true ? <FaCheck style={{color:'#6764FF',fontWeight:'700'}} /> : "A"}</span> {" Pre-Primary (Nus-2nd) "} </button>
            <button className={isActive.B === true ? 'active' : 'Section1_option'} onClick={()=>handleClick("B")}>
                <span>{isActive.B === true ? <FaCheck style={{color:'#6764FF',fontWeight:'700'}} /> : "B"}</span> {" Primary (3rd - 5th) "} </button>
            <button className={isActive.C === true ? 'active' : 'Section1_option'} onClick={()=>handleClick("C")}>
                <span>{isActive.C === true ? <FaCheck style={{color:'#6764FF',fontWeight:'700'}} /> : "C"}</span> {" Junior Section (6th - 8th) "} </button>
            <button className={isActive.D === true ? 'active' : 'Section1_option'} onClick={()=>handleClick("D")}>
                <span>{isActive.D === true ? <FaCheck style={{color:'#6764FF',fontWeight:'700'}} /> : "D"}</span> {" High School (9th-10th) "} </button>
            <button className={isActive.E === true ? 'active' : 'Section1_option'} onClick={()=>handleClick("E")}>
                <span>{isActive.E === true ? <FaCheck style={{color:'#6764FF',fontWeight:'700'}} /> : "E"}</span> {" Intermediate (11th-12th) "} </button>
            <button className={isActive.F === true ? 'active' : 'Section1_option'} onClick={()=>handleClick("F")}>
                <span>{isActive.F === true ? <FaCheck style={{color:'#6764FF',fontWeight:'700'}} /> : "F"}</span> {" Exam Prep (9th-10th) "} </button>
            <button className={isActive.G === true ? 'active' : 'Section1_option'} onClick={()=>handleClick("G")}>
                <span>{isActive.G === true ? <FaCheck style={{color:'#6764FF',fontWeight:'700'}} /> : "G"}</span> {" Others "} {isActive.G === true && <input onClick={()=>handleClick("G")} placeholder='Type' className='Others_input'/>} </button>
    </div>
    <FaChevronDown className='Down_arrow' />
    </div>
        
</div>
  )
}

export default ClassSections