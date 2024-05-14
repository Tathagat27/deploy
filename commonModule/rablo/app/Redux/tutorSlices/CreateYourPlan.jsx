import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// Defining Type for the PlanDetails Data
const PlanDetailsType = {
    order: "",
    standard: "1",
    modeOfClass: "",
    Weekly_schedule: [],
    duration: "",
    demo_Timings: "",
    Subjects: [],
    batch_length: 0,
    Objective: "",
    Outcome: "",
    language: [],
    class_begins: "",
    color: "",
    createdAt: "",
    fee_charge: 0,
    isActive: true,
    tutorId: "",
    PlanId: "bf5c0fef-136a-4c95-a669-30f3c8331227",
}
const initialState = {
    PlanCardShrink : false,
    AddPlan : false,
    isChooseYourPlan:false,
    updateYourPlan:false,
    isPlanSelected : false,
    PlanOnCLick : false,
    FetchedPlanDetails : [],
    SelectedPlan : {}
}
export const CreateYourPlan =  createSlice({
    name:"CreateYourPlan",
    initialState,
    reducers : {

        setAddPlan : (state,action) => {
            state.PlanCardShrink = action.payload.PlanCardShrink
            state.AddPlan = action.payload.AddPlan
            state.isChooseYourPlan = action.payload.isChooseYourPlan
            state.updateYourPlan = action.payload.updateYourPlan
            
        },
        
        setPlanSelected : (state,action) => {
            const {boolean, plan } = action.payload;
            state.isPlanSelected = boolean;
            state.SelectedPlan = plan;
        },
        shrinkOrExpandCard : (state,action) => {
            return {
                ...state,
                PlanCardShrink: !state.PlanCardShrink,
              };
        },
        setPlanDetails : (state,action) =>{
            state.FetchedPlanDetails = action.payload;
        }
    }
})

export const {setAddPlan,shrinkOrExpandCard,setPlanSelected,setPlanDetails} = CreateYourPlan.actions

export default CreateYourPlan.reducer;