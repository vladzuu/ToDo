import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { RootState, useAppDispatch } from '../redux/store';
import { IListToDo } from '../redux/slice/toDoSlice';
import { useSelector } from 'react-redux';
import ToDoElement from './ToDoElement';
import { ADD_MY_TODO, GET_MY_TODO } from '../redux/actionType/actionType';

const ToDo = () => {
  const [toDo, setToDo] = useState('')
  const dispatch = useAppDispatch()
  const arrToDo = useSelector((state: RootState) => state.persistedReducer.toDo.listToDo)
  const arrElementTodo = arrToDo.map((data: IListToDo) => <ToDoElement key={data.id} data={data} />)
  arrElementTodo.reverse()

  const addTask = () => {
    if (toDo.length > 0) {
      dispatch({ type: ADD_MY_TODO, payload: toDo })
      setToDo('')
    }
  }

  return (
    <div >
      <TextField
        value={toDo}
        id="standard-basic"
        label="Enter to-do"
        variant="standard"
        onChange={(e) => setToDo(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && addTask()}
      />

      <Button variant="contained" onClick={addTask}>Add ToDo</Button>

      <div className='container-todo'>
        {arrElementTodo}
      </div>
    </div>
  );
};

export default ToDo;
