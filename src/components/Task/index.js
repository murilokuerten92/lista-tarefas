import React, { useContext } from 'react'
import { TaskListContext } from '../../contexts/TaskListContext';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

import './styles.css'

const Task = ({ task }) => {

  const { removeTask, findItem, setStatusTask } = useContext(TaskListContext)

  const checkTask = e => setStatusTask(task.id, e.target.checked)

  return (
    <>
      <li className="list-tasks">
        <input type="checkbox" className='checkbox-list' checked={task.complete ? true : false} onChange={checkTask} />
        <span>{task.complete ? `Complete` : task.title}</span>
        <div>

          <button title='Editar Tarefa' className="button-update" onClick={() => findItem(task.id)}>
            <FiEdit size={18} color='#1E90FF' />
          </button>{' '}
          <button
            title='Excluir Tarefa'
            className="button-del"
            onClick={() => removeTask(task.id)}
          >
            <FiTrash2 size={18} color='#E02041' />
          </button>
        </div>
      </li>


    </>
  )
}

export default Task


