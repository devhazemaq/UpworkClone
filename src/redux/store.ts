"use client"

import {configureStore} from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch , useSelector } from 'react-redux';
import userSlice  from './slices/userSlice'
import jobSlice  from './slices/jopsSlice';
import  saveJobsSlice  from './slices/savejobSlice';

export const store = configureStore ({
  reducer:{
    userhaz: userSlice ,
    allJobs:  jobSlice,
    saveJobs:  saveJobsSlice,

  }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;