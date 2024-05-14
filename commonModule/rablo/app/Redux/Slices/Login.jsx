import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    module:'tutor',
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setModule: (state, action) => {
            state.module = action.payload;
        }
    }
});

export const {setModule}  = loginSlice.actions;
export default loginSlice.reducer;
