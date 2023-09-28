import { IJob } from "@/@tyeps/typesForrJob";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import axios from "axios";
import { API_URL_SAVEDJOBS } from "@/config/api";


export interface ISaveJobState  {
  isLoading: boolean;
  error: string | null;
  saveJobs: IJob[];
}

const initialState: ISaveJobState = {
  isLoading: false,
  error: null,
  saveJobs :[]
}

export const saveJobsSlice = createSlice({

  name: 'ISaveJobState',
  initialState,
  reducers:{
    setLoading: (state,  {payload = true}: PayloadAction<boolean | undefined>) =>{
      state.isLoading = payload;
    },
    setError: (state,action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;  
    },
    getJobsSaved: (state, action:PayloadAction<IJob[]>) => {
      state.saveJobs = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    saveNewJob : (state, action:PayloadAction<IJob[]>) => {
      state.saveJobs = [...state.saveJobs, ...action.payload];
      state.isLoading = false;
      state.error = "";
    },
    deletSsaveJop: (state,action:PayloadAction<number> ) =>{
      state.saveJobs = state.saveJobs.filter((job) => job.id !== action.payload );
      state.isLoading = false;
      state.error = "";
    }
  }
      
});

const {setLoading,setError,getJobsSaved, saveNewJob, deletSsaveJop} = saveJobsSlice.actions;

export const getJobsSavedAction = () => async (dispatch:AppDispatch) => {
  try{
    dispatch(setLoading())
    const {data} = await axios.get<IJob[]>(`${API_URL_SAVEDJOBS}`);
    // console.log(data);
    dispatch(getJobsSaved(data));

  }
  catch(error) {
    const errorrr = typeof error === 'string' ? error : String(error)
    setError(errorrr);
  }
}

export const saveNewJobAction = (body:IJob) => async (dispatch:AppDispatch) => {
  try{
    dispatch(setLoading())
    const {data} = await axios.post(`${API_URL_SAVEDJOBS}`,body);

    console.log(data);
    dispatch(saveNewJob(data));

  }
  catch(error) {
    const errorrr = typeof error === 'string' ? error : String(error)
    setError(errorrr);
  }
}

export const deletSsaveJopAction = (id:number) => async (dispatch:AppDispatch) => {
  try{
    dispatch(setLoading())
    await axios.delete(`${API_URL_SAVEDJOBS}${id}`);

    dispatch(deletSsaveJop(id));
    deletSsaveJop(id)

  }
  catch(error) {
    const errorrr = typeof error === 'string' ? error : String(error)
    setError(errorrr);

    console.log(error)
  }
}


export default saveJobsSlice.reducer;