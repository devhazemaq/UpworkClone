"use client"

import {IJob} from "@/@tyeps/typesForrJob"
import { API_URL_ALLJOPS } from "@/config/api";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "../store";



export interface IJobState {
  isLoading: boolean;
  error: string | null;
  allJobs: IJob[] ;
  sjob: IJob | null; 
}
const initialState: IJobState = {
  allJobs: [],
  isLoading: false,
  error: null,
  sjob : null,
};
export const jobSlice = createSlice({
  name: "allJobs",
  initialState,
  reducers :{
    setLoading:(state, {payload = true}:PayloadAction<boolean | undefined>) => {
      state.isLoading = payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getJobs:(state,action:PayloadAction<IJob[]>) =>{
      state.allJobs = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    getSingleJob: (state, action:PayloadAction<IJob>) => {
      state.sjob = action.payload;
      state.isLoading = false;
      state.error = "";

    }
    

  }
});

const {setLoading, setError , getJobs, getSingleJob } = jobSlice.actions;

export const getJobsAction = () => async (dispatch: AppDispatch) => {
  try{
    dispatch(setLoading());
    const {data} = await axios.get(`${API_URL_ALLJOPS}`);
    // console.log(data);
    dispatch(getJobs(data))
  }
  catch(error){
    const errorrr = typeof error === "string" ? error : String(error)
    console.log(errorrr);
  }
}
export const  getSingleJobAction = (id:number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading())
    const {data} = await axios.get(`${API_URL_ALLJOPS}/${id}`);
    dispatch(getSingleJob(data));
    console.log(id);
    console.log(data);
  }
  catch(error){
    const errorrr = typeof error === "string" ? error: String(error);
    dispatch(setError(errorrr));
    console.log(error)
    console.log(id);
  }
}


export default jobSlice.reducer;