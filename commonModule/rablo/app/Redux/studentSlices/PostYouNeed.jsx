import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     online:true,
     timingSlot:{
        A: false,
        B: false,
        C: false,
        D: false,
        E: false,
        F: false,
      },
      duration:"",
      subjects:[],
      kindOfTutor:{
        A: false,
        B: false,

      },
      gender:"",
      ageGroup:{
        A:false,
        B:false,
        C:false,
        D:false,
      },
      locationRange:"",
      raputedInstitute:"Y",
     Budget:{
        min:1000,
        max:10000,
     },
     raging:{
        A: false,
        B: false,
        C: false,
        D: false,

     }

    };

export const PostYouNeed = createSlice({
    name: "PostYouNeed",
    initialState: initialState,
    reducers: {
        setOnline: (state, action) => {
            state.online = action.payload;
        },
        setTimingSlot: (state, action) => {
            const { key, value } = action.payload;
            state.timingSlot[key] = value;
        },
        setDuration: (state, action) => {
            state.duration = action.payload;
        },
        setSubjects: (state, action) => {
            state.subjects = action.payload;
        },
        setKindOfTutor: (state, action) => {
            const { key, value } = action.payload;
            state.kindOfTutor[key] = value;
        },
        setGender: (state, action) => {
            state.gender=action.payload;
        },
        setAgeGroup: (state, action) => {
            const { key, value } = action.payload;
            state.ageGroup[key] = value;
        },
        setLocationRange: (state, action) => {
            state.locationRange = action.payload;
        },
        setRaputedInstitute: (state, action) => {
            state.raputedInstitute = action.payload;
        },
        setBudget: (state, action) => {
            const { key, value } = action.payload;
            state.Budget[key] = value;
         },
        
         setRating: (state, action) => {
            const { key, value } = action.payload;
            state.raging[key] = value;
         }
        }
});

export const { 
    setOnline, 
    setTimingSlot, 
    setDuration, 
    setSubjects,
    setKindOfTutor,
    setGender,
    setAgeGroup,
    setLocationRange,
    setRaputedInstitute,
    setBudget,
    setRating

 } = PostYouNeed.actions;

export default PostYouNeed.reducer;
