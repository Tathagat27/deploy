"use client"
import './styles/lockedButton.css'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import SlotIsLocked from '@/app/GlobalComponents/Popups_tutor/BoostrapModals/SlotIsLocked/SlotIsLocked'

const LockedButton = () => {

  const [PopupShow, SetPopupShow] = useState(false);

  const { PlanCardShrink} = useSelector((state) => state.CreateYourPlan);

  return (
    <div className={PlanCardShrink ? 'Shrinked_locked_button__wrapper' : 'locked_button__wrapper'}>
        <button className='Locked_button' onClick={() => SetPopupShow(true) }>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.8vw" height="1.8vw" viewBox="0 0 28 34" fill="none">
            <path d="M6.76562 13.5471V10.547C6.76562 5.58194 7.95734 1.54688 13.9159 1.54688C19.8745 1.54688 21.0663 5.58194 21.0663 10.547V13.5471" stroke="#6764FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.8758 31.5472H7.9586C3.19172 31.5472 2 30.0471 2 24.047V21.047C2 15.0469 3.19172 13.5469 7.9586 13.5469H19.8758C24.6427 13.5469 25.8344 15.0469 25.8344 21.047V24.047C25.8344 30.0471 24.6427 31.5472 19.8758 31.5472Z" stroke="#6764FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.1199 26.049C15.7653 26.049 17.0992 24.37 17.0992 22.2989C17.0992 20.2278 15.7653 18.5488 14.1199 18.5488C12.4745 18.5488 11.1406 20.2278 11.1406 22.2989C11.1406 24.37 12.4745 26.049 14.1199 26.049Z" stroke="#6764FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>

        <SlotIsLocked
      show={PopupShow}
      onHide={() => SetPopupShow(false)}
      SetPopupShow={SetPopupShow}
      />
        
    </div>
  )
}

export default LockedButton