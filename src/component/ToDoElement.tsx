import React, { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { useAppDispatch } from '../redux/store';
import { complete, delToDo, editToDo, listToDo } from '../redux/slice/toDoSlice';




const ToDoElement = ({ data }: any) => {
  const [classButton, setClassButton] = useState<any>('error')
  const [editArea, setEditArea] = useState(false)
  const [toDo, setToDo] = useState(data.title)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (data.isCompleted) {
      setClassButton('success')
    } else {
      setClassButton('error')
    }
  }, [data.isCompleted])

  const deleteToDo = () => {
    dispatch(delToDo(data.id))
  }
  const completeToDo = () => {
    dispatch(complete(data.id))
  }
  const activateEditArea = () => {
    setEditArea(!editArea)
  }
  const editStateToDo = () => {
    dispatch(editToDo({ title: toDo, id: data.id }))
  }

  return (
    <div key={data.id} className={'todos'}>
      <IconButton color={classButton} component="label" onClick={completeToDo}>
        <DoneOutlineIcon />
      </IconButton>
      {editArea ?
        <>
          <TextField value={toDo}
            className='title-todo'
            id="standard-basic"
            label="Standard"
            variant="standard"
            onChange={(e) => setToDo(e.target.value)}
          />
          <IconButton color="success" component="label" onClick={() => {
            activateEditArea()
            editStateToDo()
          }}>
            <SaveIcon />
          </IconButton>
        </>
        :
        <>
          <div className='title-todo'>{data.title}</div>
          <IconButton component="label" onClick={activateEditArea} >
            <EditIcon />
          </IconButton>
        </>
      }

      <IconButton component="label" onClick={deleteToDo}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default ToDoElement;
