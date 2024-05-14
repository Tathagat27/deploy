import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    firstName : "",
    lastName : "",
    Dob:"",
    gender:"",
    mobNumber:0,
    guardianMobNumber:0,
    addressLine1:"",
    city:"",
    state:"",
    pincode:"",
    //referralCode:"",
    schoolName:"",
    Class:0,
    boards:"",
    subjects:[]
}

export const StudentAccountCreation =  createSlice({
    name:"StudentAccountCreation",
    initialState,
    reducers : {

        setUserDetails: (state, action) => {
            console.log(action.payload);
            const { key, value } = action.payload;
            return { ...state, [key]: value }; 
        },
    }
})

export const {setUserDetails} = StudentAccountCreation.actions

export default StudentAccountCreation.reducer;