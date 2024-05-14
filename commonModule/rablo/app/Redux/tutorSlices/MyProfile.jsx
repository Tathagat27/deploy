import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {
        _id: '',
        studentId: '',
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
        gender: '',
        phoneNumber: '',
        guardianMobNumber: '',
        addressLine1: '',
        city: '',
        state: '',
        pincode: '',
        schoolName: '',
        class_: 0, 
        boards: '',
        subjects: [],
        referral: '',
    },
};

const MyProfileSlice = createSlice({
    name: 'myprofilesm',
    initialState,
    reducers: {
        setDataMyProfile(state, action) {
            state.data = action.payload;
        }
    }
});

export const { setDataMyProfile } = MyProfileSlice.actions;
export default MyProfileSlice.reducer;
