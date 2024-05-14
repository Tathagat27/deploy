import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sections:['Qualification', 'Preference', 'Verification', 'Self Declaration'],
    selectedSectionIndex: 0,

};

export const tutorVerificationSlice = createSlice({
    name: 'tutorVerification',
    initialState,
    reducers: {
        setSelectedSelectionIndex: (state, action) => {
            state.selectedSectionIndex = action.payload;
        }
    }
});

export const {setSelectedSelectionIndex}  = tutorVerificationSlice.actions;
export default tutorVerificationSlice.reducer;
