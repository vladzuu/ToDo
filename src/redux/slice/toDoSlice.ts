import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export interface listToDo {
  id: number
  title: string
  isCompleted: boolean
}

let initialState = {
  listToDo: [] as listToDo[]
}

const toDoSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addToDo: (state, action: any) => {
      const obj: listToDo = {
        title: action.payload,
        id: state.listToDo[state.listToDo.length - 1].id + 1,
        isCompleted: false
      }
      state.listToDo.push(obj)
    },
    receivedToDo: (state, action: any) => {
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
        if (value.id === action.payload.id) {
          value.title = action.payload.title
        }
      })
    },
    complete: (state, action) => {
      state.listToDo.forEach((value) => {
        if (value.id == action.payload) {
          value.isCompleted = !value.isCompleted
        }
      })
    }
  }
})

export const { addToDo, receivedToDo, delToDo, complete, editToDo } = toDoSlice.actions

export const getMyToDo = createAsyncThunk(
  'auth/getMyToDO',
  async (_, { dispatch }) => {
    const ls = localStorage.getItem('ddd');
    if (typeof ls === 'string' && ls.length > 0) {
      dispatch(receivedToDo(JSON.parse(ls)))
    }
  }
)

export default toDoSlice.reducer