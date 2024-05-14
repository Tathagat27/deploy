import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './Slices/Login'
import StudentAccountCreation from './studentSlices/StudentAccountCreation';
import PostNeedReducer from './studentSlices/PostYouNeed.jsx'
import tutorAccountCreation from './tutorSlices/AccountCreation'
import SidebarReducer from './studentSlices/SideNavBar'
import CreateYourPlan from './tutorSlices/CreateYourPlan.jsx'
import MyProfile from './studentSlices/MyProfile'
import MyProfileEdit from './studentSlices/MyProfileEdit';
import tutorVerificationReducer from './tutorSlices/tutor-verification';

export const store = configureStore({
  reducer: {
    loginSlice: loginSlice,
    StudentAccountCreation,
    tutorAccountCreation,
    sideNavBar: SidebarReducer,
    postNeed: PostNeedReducer,
    MyProfile: MyProfile,
    MyProfileEdit: MyProfileEdit,
    CreateYourPlan : CreateYourPlan,
    tutorVerificationReducer
  }
});

