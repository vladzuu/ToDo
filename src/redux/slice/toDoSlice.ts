import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export interface IListToDo {
  id: number
  title: string
  isCompleted: boolean
}

let initialState = {
  listToDo: [] as IListToDo[]
}

const toDoSlice = createSlice({
  name: 'toDo',
  initialState,
  reducers: {
    addToDo: (state, action) => {
      let id: number
      if (state.listToDo.length < 1) {
        id = 1
      } else {
        id = state.listToDo[state.listToDo.length - 1].id + 1
      }
      const obj: IListToDo = {
        title: action.payload,
        isCompleted: false,
        id: id,
      }
      state.listToDo.push(obj)
    },
    receivedToDo: (state, action) => {
      state.listToDo = action.payload
    },
    delToDo: (state, action) => {
      state.listToDo = state.listToDo.filter((value) => {
        if (value.id !== action.payload) {
          return value
        }
      })
    },
    editToDo: (state, action) => {
      state.listToDo.forEach((value) => {
        if (value.id === action.payload.data.id) {
          value.title = action.payload.data.title
        }
      })
    },
    completed: (state, action) => {
      state.listToDo.forEach((value) => {
        if (value.id == action.payload) {
          value.isCompleted = !value.isCompleted
        }
      })
    }
  }
})

export const { addToDo, receivedToDo, delToDo, completed, editToDo } = toDoSlice.actions

export default toDoSlice.reducer
