"use client";
import Image from 'next/image'
import React from 'react'
import styles from './styles/Post.module.scss'
import Add_Icon from '../../icons/Add.svg'
import { MdOutlinePostAdd } from "react-icons/md";


function Post() {
 
  
  return (
    <>
    <div className={styles.post_wrapper} >
       <MdOutlinePostAdd  className={styles.icon}/>
        <div>Post your need</div>
       
    </div>
   
    </>
  )
}

export default Post