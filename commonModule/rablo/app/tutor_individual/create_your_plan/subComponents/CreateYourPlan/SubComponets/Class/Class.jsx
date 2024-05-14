"use client"
import React, { useState, useEffect, use } from 'react'
import './Class.css'
import { BiSolidLeftArrow,BiSolidRightArrow  } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdInfoOutline } from "react-icons/md";
import { RiUserFollowLine } from "react-icons/ri";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { FaChevronDown,FaCheck  } from "react-icons/fa6";
import TuitionFessGraph from './SubComponents/TuitionFeesGraph/TuitionFeesGraph';



const Class = ({isActive,setIsActive,StudentCount,setStudentCount,ModeOfClass,setModeOfClass
,selectedSubjects,setSelectedSubjects,selectedLanguages,setSelectedLanguages,
batchStrength,setBatchStrength,TuitionFees,SetTuitionFees,
Duration ,setDuration,StartTime,SetStartTime,EndTime ,SetEndTime ,AM_PM_Toggle,AM_PM_Toggle_EndTime,setAM_PM_Toggle,setAM_PM_Toggle_EndTime ,
isHoursSelected,setIsHoursSelected,Weeks,setWeeks}) => {

    // <=== Section 1  Related functions and state ===>
    const handleClick = (key) => {
        setIsActive(prevState => ({
            ...prevState,
            [key]: !prevState[key]
          }));
        };

    // <=== Section 2 Demo Class Related functions and state ===>
    const rangeBarFunction = (e) =>{
        setStudentCount(e.target.value);
    }
    // <=== Section 3 Online and Offline Class Related functions and state ===>
    // const [ModeOfClass, setModeOfClass] = useState({ online : false, offline:false })
    const toggleModeOfClass = (key) =>{
        setModeOfClass(prevState => ({
            ...prevState,
            [key]: !prevState[key]
          }));
    }
   // <=== Section 4 & 5 Duartion Class Related functions and state ===>
        // const [Duration, setDuration] = useState({hours:1,min:0});
        // const [StartTime, SetStartTime] = useState({ Hours : 11, Minutes:10 })
        // const [EndTime, SetEndTime] = useState({ Hours :12 ,Minutes:10 })
        // const [AM_PM_Toggle , setAM_PM_Toggle] = useState(false);
        // const [AM_PM_Toggle_EndTime , setAM_PM_Toggle_EndTime] = useState(false);
        const SetHoursAndMinutes = (hours,min) =>{
            setDuration(prevState => ({
                ...prevState,
                hours:hours,
                min:min
            }))
        }
        useEffect(() => {
             SetEndTime(prevState => ({
                ...prevState,
                Minutes:StartTime.Minutes + Duration.min
                }))
          }, [Duration,StartTime]);

    // const [isHoursSelected, setIsHoursSelected] = useState({
    //     HoursSelected : true,
    //     MinutesSelected : false,
    // })
    const IncreaseHours = () => {
        const newTimeHR = (StartTime.Hours % 12) + 1;
        const formattedTimeHR = newTimeHR.toString().padStart(2, '0');
        const newTimeMN = (EndTime.Hours % 12) + 1;
        const formattedTimeMN = newTimeMN.toString().padStart(2, '0');
        SetStartTime((prev) => ({
            ...prev,
            Hours: formattedTimeHR
        }));
        SetEndTime((prev) => ({
            ...prev,
            Hours: formattedTimeMN
        }));
    };
    const DecreaseHours = () => {
        const newTime = (StartTime.Hours - 2 + 12) % 12 + 1;
        const formattedTime = newTime.toString().padStart(2, '0');
        SetStartTime((prev) => ({
            ...prev,
            Hours: formattedTime
        }));
    };
    const IncreaseMinutes = () => {
        const newMinutes = (StartTime.Minutes + 1) % 60;
        const formattedMinutes = newMinutes.toString().padStart(2, '0');
        SetStartTime((prev) => ({
            ...prev,
            Minutes: newMinutes,
        }));
    };
    const DecreaseMinutes = () => {
        const newMinutes = (StartTime.Minutes - 1 + 60) % 60;
        SetStartTime((prev) => ({
            ...prev,
            Minutes: newMinutes
        }));
    };
    const formattedMinutes = StartTime.Minutes.toString().padStart(2, '0');

    // <=== Section 6 Subjects Related functions and states ===>
    // const [selectedSubjects, setSelectedSubjects] = useState([]);

    const handleSubjectClick = (subject) => {
        if (selectedSubjects.includes(subject)) {
          setSelectedSubjects(selectedSubjects.filter(item => item !== subject));
        } else {
          setSelectedSubjects([...selectedSubjects, subject]);
        }
      };

      // <=== Section 7 Weekly Schedule Related functions and states ===>
    // const [Weeks, setWeeks] = useState([]);

    const handleWeeksClick = (week) => {
        if (Weeks.includes(week)) {
            setWeeks(Weeks.filter(item => item !== week));
        } else {
            setWeeks([...Weeks, week]);
        }
      };

      // <=== Section 8 Selecting Two Languages Related functions and states ===>
    //   const [selectedLanguages, setSelectedLanguages] = useState(['Hindi', 'English']);

      const handleLanguageClick = (language) => {
        if (selectedLanguages.length === 2) {
          setSelectedLanguages([language]);
        } else {
          if (!selectedLanguages.includes(language)) {
            setSelectedLanguages([...selectedLanguages, language]);
          }
        }
      };

    // <=== Section 9 TuitionFees Related functions and states ===>

        // const [TuitionFees,SetTuitionFees] = useState(0);
        const step = 100 / 20;
        const handleChange = (e) =>{
            SetTuitionFees(e.target.value);
        }

     // <=== Section 10 TuitionFees Related functions and states ===>
        // const [batchStrength, setBatchStrength] = useState(1);
        const batchStrengthOnChange = (e) =>{
            setBatchStrength(e.target.value);
        }
  return (
    <div className='Class_wrapper'>
        <div className='Section_1'>
            <div className='Section_1_main_content'>
                <h4 className='Section_heading'>1: Select the Section of Class you want to teach? </h4>
                <p className='Section_description'>Choosing a class section can attract students falling under that range. The <br/> first student's preference automatically selects the exact standard. <br/>For example, if the first student is from 4th standard, selecting the primary <br/> section will auto-select 4th standard as the primary class for that student.</p>
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
        <div className='Section_2'>
                <h4 className='Section_heading'>2: For how long can students take a Free Demo Class?</h4>
                <p className='Section_description'>Select the Number of Maximum Number of student you are expecting in <br/> your Batch</p>
                <div className='Displaying_selected_Range'>
                  <div>
                    <HiOutlineUsers className='users_icon'/>
                    <p>2</p>
                    <MdInfoOutline className='info_icon'/>
                  </div>
                  <p>Free Demo Class</p>
                </div>
                <div className='range_bar_wrapper'>
                    <BiSolidLeftArrow className='arrow_range_bar'/>
                    <input type="range" value={StudentCount} min="0" max="50" onChange={rangeBarFunction}/>
                    <BiSolidRightArrow className='arrow_range_bar'/>
                    <p>1 to {StudentCount}</p>
                    <p>50 max</p>
                </div>
        </div>

        <div className='Section_3'>
            <h4 className='Section_heading'>3: How would you prefer to conduct classes?</h4>
            <div className='Section_3_Content_wrapper'>
                <div className='Class_Card_with_enrolled_details'>
                      <div className={ModeOfClass.online ? 'ModeOfClassActive' : 'ModeOfClass'} onClick={() => toggleModeOfClass("online")}>
                          <h4 className={ModeOfClass.online ? 'ActiveA' : 'A'}>{ModeOfClass.online ? <FaCheck style={{color:'#6764FF',fontWeight:'700'}} /> : "A"}</h4>
                          <h4 className={ModeOfClass.online ? 'ActiveOnline' : 'Online'}>Online</h4>
                      </div>
                      <div>
                        <RiUserFollowLine className='enrolled_user_icon'/>
                        <h4>256467+</h4>
                        <p>Already <br/> Enrolled</p>
                      </div>
                </div>
                <div className={ModeOfClass.offline ? 'Class_card_Active' : 'Class_card'} onClick={() => toggleModeOfClass("offline")}>
                          <h4 className={ModeOfClass.offline ? 'ActiveB' : 'B'}>{ModeOfClass.offline ? <FaCheck style={{color:'#6764FF',fontWeight:'700'}} /> : "B"}</h4>
                          <h4 className={ModeOfClass.offline ? 'ActiveOffline' : 'Offline'}>Offline</h4>
                </div>
            </div>
        </div>

        <div className='Section_4'>
          <h4 className='Section_heading'>4: What duration of class would you prefer?</h4>
          <p  className='Section_description'>Select the duration of each class you want to conduct.</p>
          <div className='Section_4_Content_wrapper'>
              <div className={Duration.min === 0 ? 'Active_Class_card' : 'Class_card'} onClick={() => SetHoursAndMinutes(1,0)}>
                  <h4 >{ Duration.min === 0 ? <FaCheck style={{fontSize:'1.2vw'}}/> : "A"}</h4> 
                  <h4>1 Hr</h4>
              </div>
              <div className={Duration.min === 15 ? 'Active_Class_card' : 'Class_card'} onClick={() => SetHoursAndMinutes(1,15)}>
                  <h4 >{ Duration.min === 15 ? <FaCheck style={{fontSize:'1.2vw'}}/> : "B"}</h4>
                  <h4>1.25 Hr</h4>
              </div>
              <div className={Duration.min === 30 ? 'Active_Class_card' : 'Class_card'} onClick={() => SetHoursAndMinutes(1,30)}>
                  <h4 >{ Duration.min === 30 ? <FaCheck style={{fontSize:'1.2vw'}}/> : "C"}</h4>
                  <h4>1.5 Hr</h4>
              </div>
          </div>
        </div>

        <div className='Section_5'>
              <h4 className='Section_heading'>5: When you want to start your class?</h4>
              <p className='Section_description'>Select the Starting Time of your class and End Time will auto-adjust <br/> according to Duration.</p>
              <div className='Start_time_and_End_time_wrapper'>
                    <div className='Start_time'>
                        <h4>start</h4>
                        <><h4 className={isHoursSelected.HoursSelected ? 'HoursSelected' : 'HoursNotSelected'} 
                        onClick={() => {
                            setIsHoursSelected((prev)=> ({
                                ...prev,
                                HoursSelected : true,
                                MinutesSelected : false,
                            }))
                        }}>{StartTime.Hours }</h4> <span>:</span> 
                        <h4 className={isHoursSelected.MinutesSelected ? 'MinSelected' : 'MinNotSelected'}
                        onClick={() => {
                            setIsHoursSelected((prev)=> ({
                                ...prev,
                                HoursSelected : false,
                                MinutesSelected : true,
                            }))
                        }}>{formattedMinutes}</h4></>
                        <p onClick={() => setAM_PM_Toggle(!AM_PM_Toggle)}>{AM_PM_Toggle ? 'am' : 'pm'}</p>
                        <div>
                            <TiArrowSortedUp className='toggle_arrow_section_5' 
                             onClick={(e) => {
                                e.preventDefault(); // Prevent default action
                                e.stopPropagation();
                                isHoursSelected.HoursSelected ? IncreaseHours() : IncreaseMinutes();
                            }}/>
                            <TiArrowSortedDown className='toggle_arrow_section_5' 
                            onClick={(e) => {
                                e.preventDefault(); // Prevent default action
                                e.stopPropagation();
                                isHoursSelected.HoursSelected ? DecreaseHours() : DecreaseMinutes();
                            }}/>
                        </div>
                    </div>
                    <div className='End_time'>
                        <h4>End</h4>
                        <h4>{EndTime.Hours}:{EndTime.Minutes}</h4>
                        <p onClick={() => setAM_PM_Toggle_EndTime(!AM_PM_Toggle_EndTime)}>{AM_PM_Toggle_EndTime ? 'am' : 'pm'}</p>
                        <div>
                            <TiArrowSortedUp className='toggle_arrow_section_5'/>
                            <TiArrowSortedDown className='toggle_arrow_section_5'/>
                        </div>
                    </div>
              </div>
        </div>

        <div className='Section_6'>
            <h4 className='Section_heading'>6: Which subjects would you like to Teach?</h4>
            <p className='Section_description'>Select any one of the mentioned subject which you want to teach in your <br/> class, If your preferred subject is not mention. You can Enter the Subject by <br/> click on the Other Button.</p>
            <div>
                <div className={selectedSubjects.includes('Hindi') ? 'Active_Subjects_Wrapper' : 'Subjects_Wrapper'} onClick={() => handleSubjectClick('Hindi')}>Hindi</div>
                <div className={selectedSubjects.includes('English') ? 'Active_Subjects_Wrapper' : 'Subjects_Wrapper'} onClick={() => handleSubjectClick('English')}>English</div>
                <div className={selectedSubjects.includes('Maths') ? 'Active_Subjects_Wrapper' : 'Subjects_Wrapper'} onClick={() => handleSubjectClick('Maths')}>Maths</div>
                <div className={selectedSubjects.includes('Science') ? 'Active_Subjects_Wrapper' : 'Subjects_Wrapper'} onClick={() => handleSubjectClick('Science')}>Science</div>
                <div className={selectedSubjects.includes('Social Science') ? 'Active_Subjects_Wrapper' : 'Subjects_Wrapper'} onClick={() => handleSubjectClick('SocialScience')}>Social Science</div>
                <div className={selectedSubjects.includes('Physics') ? 'Active_Subjects_Wrapper' : 'Subjects_Wrapper'} onClick={() => handleSubjectClick('Physics')}>Physics</div>
                <div className={selectedSubjects.includes('Chemistry') ? 'Active_Subjects_Wrapper' : 'Subjects_Wrapper'} onClick={() => handleSubjectClick('Chemistry')}>Chemistry</div>
                <div className={selectedSubjects.includes('Biology') ? 'Active_Subjects_Wrapper' : 'Subjects_Wrapper'} onClick={() => handleSubjectClick('Biology')}>Biology</div>
                <div className={selectedSubjects.includes('Zoology') ? 'Active_Subjects_Wrapper' : 'Subjects_Wrapper'} onClick={() => handleSubjectClick('Zoology')}>Zoology</div>
                <div className={selectedSubjects.includes('Computer Science') ? 'Active_Subjects_Wrapper' : 'Subjects_Wrapper'} onClick={() => handleSubjectClick('ComputerScience')}>Computer Science</div>
            </div>
        </div>

        <div className='Section_7'>
                    <h4 className='Section_heading'>7: Select The Weekly Schedule of your class.</h4>
                    <div className='WeekList'>
                        <div className={Weeks.includes('Monday') ? 'ActiveWeek' : 'week'} onClick={() => handleWeeksClick('Monday')}>Mon</div> 
                        <div className={Weeks.includes('Tuesday') ? 'ActiveWeek' : 'week'} onClick={() => handleWeeksClick('Tuesday')}>Tue</div> 
                        <div className={Weeks.includes('Wednesday') ? 'ActiveWeek' : 'week'} onClick={() => handleWeeksClick('Wednesday')}>Wed</div> 
                        <div className={Weeks.includes('Thursday') ? 'ActiveWeek' : 'week'} onClick={() => handleWeeksClick('Thursday')}>Thu</div> 
                        <div className={Weeks.includes('Friday') ? 'ActiveWeek' : 'week'} onClick={() => handleWeeksClick('Friday')}>Fri</div> 
                        <div className={Weeks.includes('Saturday') ? 'ActiveWeek' : 'week'} onClick={() => handleWeeksClick('Saturday')}>Sat</div> 
                        <div className={Weeks.includes('Sunday') ? 'ActiveWeek' : 'week'} onClick={() => handleWeeksClick('Sunday')}>Sun</div>
                    </div>
                    <p className='Section_description'>You want to conduct you Class <span> N Day per Week </span> with Above Selected Schedule</p>
        </div>

        <div className='Section_8'>
            <h4 className='Section_heading'>8: What  will be the Common language of the Class?</h4>
            <div>
            {['Hindi', 'Bengali', 'Telugu', 'Marathi', 'Tamil', 'Urdu', 'Gujarati', 'Kannada', 'Malayalam', 'English'].map((language, index) => (
                <div key={index} className={selectedLanguages.includes(language) ? 'Active_language' : 'language'} 
                onClick={() => handleLanguageClick(language)}>{language}</div>
            ))}
            </div>
            <p  className='Section_description'>Your common means of Communication will be in <span> {selectedLanguages[0]} & {selectedLanguages[1]} </span> as per the above selection</p>
        </div>

        <div className='Section_9'>
                        <h4 className='Section_heading'>9: What you want to  Charge for tuition fees?</h4>
                        <p className='Section_description'>Select the amount you want to charge <span> Each Student Per Class.</span><br/> Moreover, we provide insight into what people are charging and what <br/> average amount we suggest you select for a higher conversion rate.</p>

                        <div className='Graph_Selection'>
                            <TuitionFessGraph TuitionFees={TuitionFees} />
                            <div className='Section_9_range_bar_wrapper'>
                                <BiSolidLeftArrow className='arrow_range_bar'/>
                                <input type="range" step={step} steps={step} min="0" max="100" value={TuitionFees} onChange={handleChange}/>
                                <BiSolidRightArrow className='arrow_range_bar'/>
                            </div>
                            <div className='Start_at'><p>Starts at</p><h4>₹100</h4></div> 
                            <div className='Maximum'><p>maximum</p><h4>₹5000</h4></div>
                            <div className='Ask_and_avg'>
                                <div className='Ask_Price'>
                                    <h4>Ask</h4>
                                    <h4>{TuitionFees * 29}</h4>
                                    <div>₹</div>
                                </div>
                                <div className='Avg_Price'>
                                    <h4>Avg</h4>
                                    <h4>2000</h4>
                                    <div>₹</div>
                                </div>
                            </div>
                        </div>
        </div>
        
        <div className='Section_10'>
                        <h4 className='Section_heading'>10: What is Your Expected Max. batch Strength?</h4>
                        <p className='Section_description'>Select the Number of Maximum Number of student you are expecting in <br/> your Batch</p>
                        <div className='Displaying_selected_Range'>
                            <div>
                                <HiOutlineUsers className='users_icon'/>
                                <p>2</p>
                                <MdInfoOutline className='info_icon'/>
                            </div>
                            <p>Free Demo Class</p>
                        </div>
                        <div className='range_bar_wrapper'>
                            <BiSolidLeftArrow className='arrow_range_bar'/>
                            <input type="range" min="0" max="50" value={batchStrength} onChange={batchStrengthOnChange} />
                            <BiSolidRightArrow className='arrow_range_bar'/>
                            <p>1 to {batchStrength}</p>
                            <p>50 max</p>
                        </div>
        </div>
    </div>
  )
}

export default Class