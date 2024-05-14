"use client";
import Image from "next/image"
import React from "react";
import style from "./style/choose.module.scss"
import Succes from './Assets/Success_rate.svg'
import { FaCheck, FaChevronRight } from "react-icons/fa";

function Choose({width="19.06vw" , option_no , option_title,set,onClick}) {
  const [click , setClick] = React.useState(false);
   const tickHandler=()=>{
      setClick(prev=>!prev)
      onClick();
   }
  return (
    <div onClick={tickHandler} style={set&&click?{backgroundColor:"#F82083", color:"white",width:width}:{width:width}} className={style.main} >
     <div style={set&&click?{background:"white"}:{background:"#F820831A"}} className={style.option_no}>
       <span>{set&&click?<FaCheck/>:option_no}</span>
     </div>
     <div className={style.option_title}>
     <div>
        {option_title}
     </div>
     </div>
    </div>
  )
}

export default Choose