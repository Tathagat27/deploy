import './styles/AddPlanButton.css'
import { FiPlus } from "react-icons/fi";
import { useDispatch,useSelector } from 'react-redux';
import {setAddPlan} from '../../../../Redux/tutorSlices/CreateYourPlan'
import { setPlanSelected } from '../../../../Redux/tutorSlices/CreateYourPlan'

const AddPlanButton = ({navigation, SetNavigation}) => {
  const dispatch = useDispatch();

  const { PlanCardShrink} = useSelector((state) => state.CreateYourPlan);

  const updateState = () => {
    dispatch(setAddPlan({
      PlanCardShrink:true,
      AddPlan: true,
      isChooseYourPlan:true,
      PlanOnCLick:true        
    }));
    dispatch(setPlanSelected(false));
    SetNavigation("Class")
  };

  return (
    <div className={PlanCardShrink ? 'Shrinked_AddPlanButton_wrapper' :'AddPlanButton_wrapper'}>
      <button onClick={updateState} className='AddPlan_button'><FiPlus className='Plus_Icon'/></button>
    </div>
  )
}

export default AddPlanButton