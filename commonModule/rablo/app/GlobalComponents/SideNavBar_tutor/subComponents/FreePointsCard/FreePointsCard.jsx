import React from 'react'
import './styles/FreePointCard.css'
import Add_Icon from '../../icons/Add_Bg_White.svg'
import Image from 'next/image'

const FreePointsCard = () => {
  return (
    <div className='Card_wrapper'>
    
        <p>Get Free <br/> Points !!</p>  
        <div >
            <Image src={Add_Icon} alt='add points' style={{width:'1.302vw',height:'1.302vw'}}/> 500
        </div>
    </div>
  )
}

export default FreePointsCard