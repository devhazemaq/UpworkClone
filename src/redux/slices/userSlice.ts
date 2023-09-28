"use client";

import { API_URL_USERDATA } from "@/config/api";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {AppDispatch} from "../store"
import axios from "axios";

export type userTypes = {
  id: number;
  name: string;
  jobTitle: string;
  hourlyRate: number;
  userBiography: string;
  userSkills: string[];
};

export interface IuserState {
  isLoading: boolean;
  error: string | null;
  user: userTypes[];
}

const initialState: IuserState = {
  isLoading: false,
  error: null,
  user: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (
      state,
      { payload = true }: PayloadAction<boolean | undefined>) => {
      state.isLoading = payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getUserInfo: (state, action: PayloadAction<userTypes[]>) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    
    updateJobTitle: (state, action: PayloadAction<string>) => {
      
      state.user[0].jobTitle = action?.payload;
      state.isLoading = false;
      state.error = "";
    },
    updateUserBiography: (state, action: PayloadAction<string>) => {
      state.user[0].userBiography = action?.payload;
      state.isLoading = false;
      state.error = "";
    },

    updateHourlyRate: (state, action: PayloadAction<number>) => {
      
      state.user[0].hourlyRate = action?.payload;
      state.isLoading = false;
      state.error = "";
    },
    
  },
});



const { setLoading, setError, getUserInfo, updateJobTitle, updateHourlyRate, updateUserBiography } = userSlice.actions;

export const getUserInfoAction = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await axios.get<userTypes[]>(`${API_URL_USERDATA}`);
    // console.log(data);
    dispatch(getUserInfo(data));
  } catch (error) {
    const errorrr = typeof error === "string" ? error : String(error);

    dispatch(setError(errorrr));
  }
};

export const updateJobTitleAcrion = (body:string) => async (dispatch: AppDispatch) => {
  try{
    dispatch(setLoading());
    await axios.patch(`${API_URL_USERDATA}1`,{ jobTitle : body });
    console.log(body)
    dispatch(updateJobTitle(body))

  }catch (error) {
    const errorrr = typeof error === "string" ? error : String(error);
    console.log(error)
    dispatch(setError(errorrr));
  }
}
export const updateHourlyRateAcrion = (body:string) => async (dispatch: AppDispatch) => {
  try{
    dispatch(setLoading());
    await axios.patch(`${API_URL_USERDATA}1`,{ hourlyRate : body });
    console.log(body)
    dispatch(updateHourlyRate(+body))

  }catch (error) {
    const errorrr = typeof error === "string" ? error : String(error);
    console.log(error)
    dispatch(setError(errorrr));
  }
}

export const updateUserBiographyAcrion = (body:string) => async (dispatch: AppDispatch) => {
  try{
    dispatch(setLoading());
    await axios.patch(`${API_URL_USERDATA}1`,{ userBiography  : body });
    console.log(body)
    dispatch(updateUserBiography(body))

  }catch (error) {
    const errorrr = typeof error === "string" ? error : String(error);
    console.log(error)
    dispatch(setError(errorrr));
  }
}

export default userSlice.reducer;

