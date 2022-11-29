import React, { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { useAppDispatch } from '../redux/store';
import { DEL_MY_TODO, EDIT_MY_TODO, SET_COMPLETE } from '../redux/actionType/actionType';
import { IListToDo } from '../redux/slice/toDoSlice';

interface IData {
  data: IListToDo
  key: number
}

const ToDoElement = ({ data }: IData) => {
  const [classButton, setClassButton] = useState<'success' | 'error'>('error')
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
    dispatch({ type: DEL_MY_TODO, payload: data.id })
  }
  const completeToDo = () => {
    dispatch({ type: SET_COMPLETE, payload: data.id })
  }
  const activateEditArea = () => {
    setEditArea(!editArea)
  }
  const editToDoInState = () => {
    dispatch({ type: EDIT_MY_TODO, data: { title: toDo, id: data.id } })
  }

  return (
    <div key={data.id} className={'todos'}>
      <IconButton color={classButton} component="label" onClick={completeToDo}>
        <DoneOutlineIcon />
      </IconButton>
      {editArea ?
        <div>
          <TextField value={toDo}
            className='title-todo'
            id="standard-basic"
            label="Edit Todo"
            variant="standard"
            onChange={(e) => setToDo(e.target.value)}
            autoFocus={true}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                activateEditArea()
                editToDoInState()
              }
            }}

          />
          <IconButton color="success" component="label" onClick={() => {
            activateEditArea()
            editToDoInState()
          }}>
            <SaveIcon />
          </IconButton>
        </div>
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
