import React from 'react'
import './styles/SaveAndNext.css'

const SaveAndNext = (props) => {
  return (
    <div>
        <button disabled={props.disabled} onClick={props.function} 
        className={props.SaveAndNextBtnDisabled ? 'InActive_Save_and_next_btn' :'Save_and_next_btn' }>
          {props.ButtonText}
        </button>
    </div>
  )
}

export default SaveAndNext