import React from 'react'
import './TuitionFeesGraph.css'
import { MdInfoOutline } from "react-icons/md";

// #6764FF
const TuitionFeesGraph = ({TuitionFees}) => {
  
  return (
    <>
    <div className='AvgCharge'>
      <div>
        <h4>₹</h4>
        <h4>2000</h4>
        <MdInfoOutline className='info_icon'/>
      </div>
      <p>Average Charge</p>
      <span></span>
    </div>
    
    <div className='TuitionFeesGraph_wrapper'>
      <div style={TuitionFees >= 0 && TuitionFees < 5 ? {backgroundColor:'#6764FF'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees >= 5 && TuitionFees < 6 ? {backgroundColor:'#6764FF'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees >= 10 && TuitionFees <15  ? {backgroundColor:'#6764FF'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees >= 15 && TuitionFees <20  ? {backgroundColor:'#6764FF'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees >= 20 && TuitionFees <25  ? {backgroundColor:'#6764FF'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees >= 25 && TuitionFees <30  ? {backgroundColor:'#6764FF'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees >= 30 && TuitionFees <35  ? {backgroundColor:'#6764FF'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees >= 35 && TuitionFees <40  ? {backgroundColor:'#6764FF'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees >= 40 && TuitionFees <45  ? {backgroundColor:'#6764FF'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees >= 45 && TuitionFees <50  ? {backgroundColor:'#6764FF'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees >= 50 && TuitionFees <55  ? {backgroundColor:'#6764FF'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees >= 55 && TuitionFees <60  ? {backgroundColor:'#6764FF'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees >= 60 && TuitionFees <65  ? {backgroundColor:'#6764FF'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees >= 65 && TuitionFees <70  ? {backgroundColor:'#6764FF'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees >= 70 && TuitionFees <75  ? {backgroundColor:'#23DA36'} : {backgroundColor:'#23DA36'}}> </div>
      <div style={TuitionFees >= 75 && TuitionFees <80  ? {backgroundColor:'#6764FF'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees >= 80 && TuitionFees <85  ? {backgroundColor:'#6764FF'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees >= 85 && TuitionFees <90  ? {backgroundColor:'#6764FF'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees >= 90 && TuitionFees <95  ? {backgroundColor:'#6764FF'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees >= 95 && TuitionFees <100  ? {backgroundColor:'#6764FF'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees >= 100 && TuitionFees <105  ? {backgroundColor:'#6764FF'} : {backgroundColor:'#6764FF4D'}}> </div>
    </div>
    </>
  )
}

export default TuitionFeesGraph