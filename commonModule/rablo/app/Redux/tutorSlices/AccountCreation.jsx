import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
firstName : "",
lastName : "",
file : "",
gender : "",
mobileNumber : 0,
dob : "",
addressLine1 : "",
addressLine2 : "",
city : "",
state : "",
pincode :0,
//referral: "",
}
export const AccountCreation =  createSlice({
    name:"accountCreation",
    initialState,
    reducers : {

        setUserDetails: (state, action) => {
            const { key, value } = action.payload;
            return { ...state, [key]: value }; 
        },
    }
})

export const {setUserDetails} = AccountCreation.actions

export default AccountCreation.reducer;