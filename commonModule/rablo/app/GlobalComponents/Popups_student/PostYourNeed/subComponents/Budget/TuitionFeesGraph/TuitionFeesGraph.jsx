import React from 'react'
import './TuitionFeesGraph.css'
import { MdInfoOutline } from "react-icons/md";

// #6764FF
const TuitionFeesGraph = ({TuitionFees,TuitionFees2}) => {
  
  return (
    <>
    <div className='AvgCharge'>
      {/* <div>
        <h4></h4>
        <h4></h4>
        <MdInfoOutline className='info_icon'/>
      </div>
      <p></p>
      <span></span> */}
    </div>
    
    <div className='TuitionFeesGraph_wrapper'>
      <div style={TuitionFees >1000? {border:'0.3vw solid #FFBFDC'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees  >1500 ? {border:'0.3vw solid #FFBFDC'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees >2000||TuitionFees2 <2000   ? {border:'0.3vw solid #FFBFDC'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees > 2500||TuitionFees2 <2000    ? {border:'0.3vw solid #FFBFDC'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees > 3000||TuitionFees2 <2500   ? {border:'0.3vw solid #FFBFDC'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees > 3500 ||TuitionFees2 <3000  ? {border:'0.3vw solid #FFBFDC'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees > 4000||TuitionFees2 <3500  ? {border:'0.3vw solid #FFBFDC'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees > 4500||TuitionFees2 <4000  ? {border:'0.3vw solid #FFBFDC'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees > 5000 ||TuitionFees2 <4500  ? {border:'0.3vw solid #FFBFDC'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees > 5500 ||TuitionFees2 <5000 ?{border:'0.3vw solid #FFBFDC'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees > 6000||TuitionFees2 <5500 ?{border:'0.3vw solid #FFBFDC'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees > 6500||TuitionFees2 <6000  ? {border:'0.3vw solid #FFBFDC'}  : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees > 7000 ||TuitionFees2 <6500 ? {border:'0.3vw solid #FFBFDC'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees > 7500 ||TuitionFees2 <7000 ? {border:'0.3vw solid #FFBFDC'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees > 8000|| TuitionFees2 <7500  ? {border:'0.3vw solid #FFBFDC'}: {backgroundColor:'#23DA36'}}> </div>
      <div style={TuitionFees > 8500  || TuitionFees2 <8000  ? {border:'0.3vw solid #FFBFDC'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees > 9000  || TuitionFees2 <8500  ?{border:'0.3vw solid #FFBFDC'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees > 9500  || TuitionFees2 <9000  ? {border:'0.3vw solid #FFBFDC'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={TuitionFees > 10000 || TuitionFees2 <9500 ? {border:'0.3vw solid #FFBFDC'} : {backgroundColor:'#6764FF4D'}}> </div>
      <div style={ TuitionFees2 <10000  ?{border:'0.3vw solid #FFBFDC'} : {backgroundColor:'#6764FF4D'}}> </div>
      
    </div>
    </>
  )
}

export default TuitionFeesGraph