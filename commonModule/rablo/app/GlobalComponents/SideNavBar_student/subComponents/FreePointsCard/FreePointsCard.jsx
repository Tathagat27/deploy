import React from 'react'
import './styles/FreePointCard.css'
import Add_Icon from '../../icons/Add_Bg_White.svg'
import Image from 'next/image'
import refer from '../../icons/image 135.svg'
const FreePointsCard = () => {
  return (
    <div className='Card_wrapper'>
    
        <p>Refer a Friend </p>  
        {/* <div >
            <Image src={Add_Icon} style={{width:'1.302vw',height:'1.302vw'}}/> 500
        </div> */}
        <Image src={refer} alt='refer'/> 

    </div>
  )
}

export default FreePointsCard