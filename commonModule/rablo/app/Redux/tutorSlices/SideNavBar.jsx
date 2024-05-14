import { createSlice} from "@reduxjs/toolkit";


export const SideNavBar = createSlice({
    name:"SideNavBar",
    initialState : 0,
    reducers:{
        setSideNavBarState : (state, action) => {
            
        }
    }
})

export const {setSideNavBarState} = SideNavBar.actions

export default SideNavBar.reducer;