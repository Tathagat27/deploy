import React from 'react'
import './styles/RequestPage.css'
import dotted_Up_Down_arrow from '../../Assets/dotted_Up&Down_arrow.svg'
import Image from 'next/image'
import StudentRequest from './subComponents/StudentRequest/StudentRequest'

const RequestPage = () => {
  return (
    <div className='Request_page_wrapper'>
      <div className='Column_names'>
        <h4>Name</h4> 
        <h4 style={{marginLeft:"3.5vw"}}>Class</h4> 
        <h4 style={{marginLeft:"3.5vw"}}>Subjects</h4> 
        <h4 style={{marginLeft:"5vw"}}>Mode <Image src={dotted_Up_Down_arrow} alt='Max budget' /></h4> 
        <h4 style={{marginLeft:"4vw"}}>Timings <Image src={dotted_Up_Down_arrow} alt='Max budget'/></h4> 
        <h4 style={{marginLeft:"4vw"}}>Demo Dates</h4> 
        <h4 style={{marginLeft:"5vw"}}>Plan  <Image src={dotted_Up_Down_arrow} alt='Max budget'/></h4>
        <h4 style={{marginLeft:"5vw"}}>Action</h4>
      </div>
      <StudentRequest/>
    </div>
  )
}

export default RequestPage