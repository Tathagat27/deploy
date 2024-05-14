import React from 'react';
import "./styles/Checkbox.css";
import { TiTick } from "react-icons/ti";


const Checkbox = ({text, active}) => {
  return (
    <div style={active ? ({backgroundColor:"white", color: "#6764FF"}):null} className='checkbox'>
    {!active ? text : <TiTick />
}
    </div>
  )
}

export default Checkbox