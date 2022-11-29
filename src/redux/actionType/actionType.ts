export const GET_MY_TODO = 'toDo/getMyToDO';
export const DEL_MY_TODO = 'toDo/delTodo';
export const ADD_MY_TODO = 'toDo/addMyToDo';
export const SET_COMPLETE = 'toDo/setComplete';
export const EDIT_MY_TODO = 'toDo/editMyToDo';

export interface IDeleteTodo {
  type: typeof GET_MY_TODO,
  payload: number
}

export interface IAddMyToDo {
  type: typeof ADD_MY_TODO,
  payload: string
}

export interface ISetComplete {
  type: typeof SET_COMPLETE,
  payload: number
}

export interface IEditToDo {
  type: typeof EDIT_MY_TODO,
  payload: {
    id: number,
    title: string
  }
}


