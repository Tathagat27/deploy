"use client"
import { useRouter } from 'next/navigation';
import { IoArrowBackSharp } from "react-icons/io5";

import './BackButton.css'

const BackButton = () => {
    const router = useRouter();
  return (
    
    <IoArrowBackSharp className='back-icon' onClick={() => {router.back()}}/>
  )
}

export default BackButton;