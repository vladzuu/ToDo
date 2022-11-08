import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from "react-redux";
import toDoSlice from './slice/toDoSlice';


let store = configureStore({
  reducer: {
    toDo: toDoSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store;
