import { createSlice} from "@reduxjs/toolkit";

const initialState={
    isSidebarOpen:false,
    showModal:false

}
export const SideNavBar = createSlice({
    name:"SideNavBar",
    initialState : initialState,
    reducers:{
        setSideNavBarState : (state, action) => {
            state.isSidebarOpen = action.payload
        },
        setShowModal:()=>{
            state.showModal=action.payload
        }
    }
})

export const {setSideNavBarState,setShowModal} = SideNavBar.actions

export default SideNavBar.reducer;