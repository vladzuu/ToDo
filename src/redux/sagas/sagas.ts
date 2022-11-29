import { ADD_MY_TODO, DEL_MY_TODO, IAddMyToDo, IDeleteTodo, SET_COMPLETE, ISetComplete, EDIT_MY_TODO, IEditToDo } from './../actionType/actionType';
import { put, takeEvery, } from 'redux-saga/effects';
import { addToDo, completed, delToDo, editToDo, receivedToDo } from '../slice/toDoSlice';


function* deleteTodo({ payload }: IDeleteTodo) {
  yield put(delToDo(payload))
}

function* addMyToDo({ payload }: IAddMyToDo) {
  yield put(addToDo(payload))
}

function* setComplete({ payload }: ISetComplete) {
  yield put(completed(payload))
}

function* editMyTodo(payload: IEditToDo) {
  yield put(editToDo(payload))
}

export function* sagaWatcher() {
  yield takeEvery(DEL_MY_TODO, deleteTodo)
  yield takeEvery(ADD_MY_TODO, addMyToDo)
  yield takeEvery(SET_COMPLETE, setComplete)
  yield takeEvery(EDIT_MY_TODO, editMyTodo)
}







