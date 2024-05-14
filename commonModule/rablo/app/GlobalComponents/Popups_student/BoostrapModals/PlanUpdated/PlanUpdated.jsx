import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { IoClose } from "react-icons/io5";
import './PlanUpdated.css'
import { IoRibbonOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { setAddPlan } from '@/app/Redux/Slices/CreateYourPlan';

const PlanUpdated = (props) => {
    const dispatch = useDispatch();
    const {updateYourPlan,AddPlan} = useSelector((state) => state.CreateYourPlan)
  return (
    <Modal {...props} centered >
      
    <div className='PlanUpdate_Main_content'>
        <IoClose className='Popup_Close' onClick={
            () => {
                dispatch(setAddPlan({updateYourPlan:false,isChooseYourPlan:false}))
                props.setModalShow(false)
            }}/>
      <div><IoRibbonOutline className='Ribbon_icon'/></div>

      <h4>Your Plan has been {updateYourPlan ? 'Updated!' :'Created!'}</h4>
      <p>You can edit your plan as per your preference anytime.</p>
      {AddPlan &&
      <div className='Go_to_your_plan_btn'>
        <button onClick={() => {
            dispatch(setAddPlan({updateYourPlan:false,isChooseYourPlan:false}))
            props.setModalShow(false)
        }}>Go to Your Plan</button>
      </div>
      }
    </div>
  </Modal>
  )
}

export default PlanUpdated