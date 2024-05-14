"use client";
import React, { use } from 'react'
import style from './style/Subject.module.scss'
import { useSelector,useDispatch } from 'react-redux'
import { setSubjects } from '../../../Redux/studentSlices/PostYouNeed';

function Subject({name,width}) {

    const dispatch = useDispatch()
    const subject =useSelector(state=>state.postNeed.subjects)
    const clickHandler = () => {

     // setClick(prev=>!prev)
      dispatch(setSubjects(subject.includes(name)?subject.filter(item=>item!==name):subject.concat(
        name
      )));
    }
  return (
    <div  className={style.main} onClick={()=>clickHandler()} style={subject.includes(name)?{color:"white",backgroundColor:"#D04E62",width:width}:{width:width}}>
        <span>
         {name}
        </span>
    </div>
  )
}

export default Subject