import React from 'react'
import './styles/OnlinePage.css'
import dotted_Up_Down_arrow from '../../Assets/dotted_Up&Down_arrow.svg'
import Image from 'next/image'

import StudentRequest from './subComponents/StudentRequest/StudentRequest'

const OnlinePage = () => {
  return (
    <div className='Online_page_wrapper'>
      <div className='Column_names'>
        <h4>Name</h4> 
        <h4 style={{marginLeft:"5vw"}}>Class</h4> 
        <h4 style={{marginLeft:"5vw"}}>Subjects</h4> 
        <h4 style={{marginLeft:"9vw"}}>Max budget <Image src={dotted_Up_Down_arrow} alt='Max budget' style={{marginLeft:"1vw"}}/></h4> 
        <h4 style={{marginLeft:"5vw"}}>Match <Image src={dotted_Up_Down_arrow} alt='Max budget' style={{marginLeft:"1vw"}}/></h4> 
        <h4 style={{marginLeft:"4vw"}}>Success <Image src={dotted_Up_Down_arrow} alt='Max budget' style={{marginLeft:"1vw"}}/></h4> 
        <h4 style={{marginLeft:"5vw"}}>Action</h4>
      </div>

      <StudentRequest/>
    </div>
  )
}

export default OnlinePage