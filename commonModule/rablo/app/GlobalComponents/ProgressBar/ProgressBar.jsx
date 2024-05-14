import React from 'react'
import './Styles/ProgressBar.css'
const ProgressBar = () => {
  return (
    <div className="progressbar">
      <p className="start">Start</p>
      <div className="bar">
        <div className="fill"></div>
        <div className="circle">
          <p className="value">60%</p>
        </div>
      </div>
      <p className="completed">Completed</p>
    </div>
  )
}

export default ProgressBar