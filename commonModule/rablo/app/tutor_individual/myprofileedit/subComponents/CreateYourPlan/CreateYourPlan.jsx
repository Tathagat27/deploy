import React, { useState } from 'react'
import './styles/CreateYourPlan.css'
import { TbSquareRoundedNumber1Filled,
  TbSquareRoundedNumber2Filled,
  TbSquareRoundedNumber3Filled } from "react-icons/tb";
import { MdKeyboardArrowRight } from "react-icons/md";
import Class from './SubComponets/Class/Class';
import Declaration from './SubComponets/Declaration/Declaration'
import Objective from './SubComponets/Objective/Objective'
import SaveAndNext from '@/app/GlobalComponents/Buttons_tutor/SaveAndNext/SaveAndNext';
import { LuChevronLeft } from "react-icons/lu";
import BackButton from '@/app/GlobalComponents/Buttons_tutor/BackButton/BackButton';
import { setAddPlan } from '@/app/Redux/Slices/CreateYourPlan';
import { useDispatch, useSelector } from 'react-redux';
import PlanUpdated from '@/app/GlobalComponents/Popups_tutor/BoostrapModals/PlanUpdated/PlanUpdated';

const CreateYourPlan = ({navigation, SetNavigation}) => {
  //const [navigation , SetNavigation ] = useState("Class");
  const Icon = TbSquareRoundedNumber1Filled;
  const navigation_path_varibles = [
    {name:"Class",
    Icon:TbSquareRoundedNumber1Filled,
    Arrow :MdKeyboardArrowRight},
    {name:"Objective",
    Icon:TbSquareRoundedNumber2Filled,
    Arrow :MdKeyboardArrowRight},
    {name:"Declaration",
    Icon:TbSquareRoundedNumber3Filled,
    },
  ]
  const dispatch = useDispatch();
  const {updateYourPlan} = useSelector((state)=> state.CreateYourPlan);
  const [modalShow, setModalShow] = useState(false);

  const Navigate = (back) =>{
    if(back != "back"){
    if(navigation === "Class" ){
      SetNavigation("Objective");
    }else if(navigation === "Objective"){
      SetNavigation("Declaration");
    }else{
      if(updateYourPlan){
        setModalShow(true);
      }else{
        setModalShow(true);
      }
    }
    }else{
      if(navigation === "Declaration" ){
        SetNavigation("Objective");
      }else{
        SetNavigation("Class");
      }
    }
  }
  const [SaveAndNextBtnDisabled,setSaveAndNextBtnDisabled] = useState(true);
  return (
    <div className='CreateYourPlan_wrapper'>
      <h4>Create Your Plan</h4>
      <p>The power of creating your batch plan now at your disposal!!!</p>
      <div className='navigation_path'>
        {navigation_path_varibles.map((items,index) => (
          <div key={index} className='path_variables' >
              <items.Icon className={navigation === items.name ? 'Selected_path_icons' : 'path_icons'}/>
              <p className={navigation === items.name ? 'Selected_Variable_name' : 'variable_name'}>{items.name}</p>
              {items.Arrow && <items.Arrow className='arrow' />}
          </div>
           ))}   
      </div>
      <div className='Scroll_Container_create_plan'>
        {
          navigation === 'Class' 
          ?
          <Class/>
          :
          navigation === 'Objective'
          ?
          <Objective/>
          :
          <Declaration setSaveAndNextBtnDisabled={setSaveAndNextBtnDisabled} SaveAndNextBtnDisabled={SaveAndNextBtnDisabled}/>
        }
      </div>
      <div className='save_and_next_btn'>
        {navigation != 'Class' &&
      <button onClick={()=>Navigate("back")} className='Objective_Back_btn'>< LuChevronLeft style={{fontSize:'1.5vw'}}/> <span style={{fontStyle:'1vw',fontFamily:'Poppins,sans serif',fontSize:'1.2vw',marginRight:'0.8vw'}}>Back</span></button>
        }
        {navigation === 'Declaration' ? 
            <SaveAndNext 
            ButtonText = {"Continue"}
            SaveAndNextBtnDisabled={SaveAndNextBtnDisabled} 
            disabled={SaveAndNextBtnDisabled}  
            function={Navigate}/> : 
            <SaveAndNext ButtonText = {"Save & Next"} function={Navigate}/>
        }

      <PlanUpdated show={modalShow}
          onHide={() => setModalShow(false)}
          setModalShow={setModalShow}/>
      </div>
    </div>
  )
}

export default CreateYourPlan