import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {
        class_: 0,
        boards: '',
    },
};

const MyProfileEditSlice = createSlice({
    name: 'myprofileeditsm',
    initialState,
    reducers: {
        updateBoards(state, action) {
            state.data.boards = action.payload;
        },
        updateClasses(state, action) {
            state.data.class_ = action.payload;
        }
    }
});

export const { updateBoards, updateClasses } = MyProfileEditSlice.actions;
export default MyProfileEditSlice.reducer;
