"use client"
import './styles/PlanOverView.css'
import ChooseYourPlan from '../Instructions/ChooseYourPlan'
import Delete_Icon from './Assets/Delete_Icon.svg'
import Left_arrow from './Assets/Left_arrow.svg'
import Right_arrow from './Assets/Right_arrow.svg'
import Image from 'next/image'
import dynamic from "next/dynamic";
import RemoveYourPlanPopup from '@/app/GlobalComponents/Popups_tutor/BoostrapModals/RemoveYourPlan/RemoveYourPlan'
import { useState } from 'react'
import { setAddPlan } from '@/app/Redux/Slices/CreateYourPlan';
import { useDispatch } from 'react-redux';
import {setPlanSelected} from '@/app/Redux/Slices/CreateYourPlan'
import { useSelector } from 'react-redux'

const PlanOverView = () => {

  const renderSubjects = (subjects) => {
    if (!subjects || subjects.length === 0) return 'No subjects';
  
    let displaySubjects = `${subjects[0]} ${subjects[1]}`; // Initial value with first two subjects
  
    if (subjects.length > 2) {
      const remainingCount = subjects.length - 2;
      displaySubjects += ` +${remainingCount} more`;
    }
  
    return displaySubjects;
  };

  const {SelectedPlan} = useSelector((state) => state.CreateYourPlan);
  console.log("SelectedPlan",SelectedPlan);
  const myMap = new Array();
  myMap.push({ name: "Grade", value: `${SelectedPlan.standard}` });
  myMap.push({ name: "Mode", value: SelectedPlan.modeOfClass });
  myMap.push({ name: "Schedule", value: "5 days/week, 1 hour/day" });
  myMap.push({ name: "Time", value: "4 pm - 5 pm" });
  myMap.push({ name: "Subject", value: SelectedPlan.Subjects.length > 2 ? `${SelectedPlan.Subjects[0]}, ${SelectedPlan.Subjects[1]} +${SelectedPlan.Subjects.length - 2}` : `${SelectedPlan.Subjects[0]}, ${SelectedPlan.Subjects[1]}`});
  myMap.push({ name: "Batch size", value: `${SelectedPlan.batch_length} students` });
  myMap.push({ name: "Objective", value: SelectedPlan.Objective });
  myMap.push({ name: "Outcome", value: SelectedPlan.Outcome});
  myMap.push({ name: "Duration", value: "60 days" });

  const [PopupShow, SetPopupShow] = useState(false);

  const dispatch = useDispatch();
  
  
  return (
    
    <div className='PlanOverView__wrapper'>
      {/* <ChooseYourPlan/> */}
      <div className='PlanOverView__Container'>
          <h4>Plan Overview</h4>
          <p>The power of creating your batch plan now at your disposal!!</p>

        <div className='Summary__wrapper'>
          <h4>Summary</h4>
              <div className='Summary_container'>
                  <p>If you have reviewed your selections and feel satisfied with your choices, you can simply <span>click on the "Create" button</span> located below to proceed.</p>
                  <h4 className='Details_Heading'>Details</h4>
                  <div className='Details_container'>
                        {
                          myMap.map((items) => (
                            <div className='Details__field' key={items.name}>
                            <ul><li>{items.name}</li></ul> <span>:</span> <p>{items.value}</p>
                            </div>
                          ))} 
                  </div>

                  <div className='Summary_bottom'>
                        <h4>Your Payment Per Class </h4>
                        <div>
                          <h4>₹220</h4>
                          <p>Per Hour</p>
                        </div>
                  </div>
              </div>
        </div>
          <div className='Edit__Delete_and__Share'>
              <button 
              onClick={() => SetPopupShow(true)}>
              <Image src={Delete_Icon} alt='Delete' style={{marginBottom:'0.6vh',marginRight:'1vh'}}/> 
              Delete
              </button>

              <button 
              onClick={() => 
                {
              dispatch(setAddPlan({
                isChooseYourPlan:true,
                updateYourPlan:true, 
                PlanCardShrink:true }));
              dispatch(setPlanSelected(false))
              }
              }>
                  
              <Image src={Left_arrow} alt='Edit'style={{marginRight:'1vh'}}/>
              Edit
              </button>

              <button>Share<Image src={Right_arrow} alt='Edit'style={{marginLeft:'1vh'}}/></button>
          </div>
      </div>

      <RemoveYourPlanPopup
      show={PopupShow}
      onHide={() => SetPopupShow(false)}
      SetPopupShow={SetPopupShow}
       />

    </div>
  )
}

export default dynamic (() => Promise.resolve(PlanOverView), {ssr: false})
