import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { RootState, useAppDispatch } from '../redux/store';
import { addToDo, getMyToDo, listToDo, receivedToDo } from '../redux/slice/toDoSlice';
import { useSelector } from 'react-redux';
import ToDoElement from './ToDoElement';

const ToDo = () => {
  const [toDo, setToDo] = useState('')
  const dispatch = useAppDispatch()

  const arrToDo = useSelector((state: RootState) => state.toDo.listToDo)
  const arrElementTodo = arrToDo.map((data: listToDo) => <ToDoElement key={data.id} data={data} />)
  arrElementTodo.reverse()

  useEffect(() => {
    dispatch(getMyToDo())
  }, [])

  useEffect(() => {
    if (arrToDo.length > 0) {
      localStorage.setItem('ddd', JSON.stringify(arrToDo))
      console.log(arrToDo)
    }
  }, [arrToDo])

  const addHandle = () => {
    if (toDo.length > 0) {
      dispatch(addToDo(toDo))
      setToDo('')
    }
  }

  return (
    <div>
      <TextField
        value={toDo}
        id="standard-basic"
        label="Enter to-do"
        variant="standard"
        onChange={(e) => setToDo(e.target.value)} />

      <Button variant="contained" onClick={addHandle}>Add ToDo</Button>

      <div className='container-todo'>
        {arrElementTodo}
      </div>
    </div>
  );
};

export default ToDo;
