import React, { useContext } from 'react'
import { TaskListContext } from '../../contexts/TaskListContext';

import './styles.css'

const Task = ({ task }) => {

  const { removeTask, findItem, setStatusTask  } = useContext(TaskListContext)

  const checkTask = e => setStatusTask(task.id, e.target.checked)

  return (
    <li className="list-item">
        <input type="checkbox"  checked={task.complete ? true : false} onChange={checkTask} />
      <span className={ task.complete ? 'task-done' : '' }>{task.title} </span>
      <div>
       
        <button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
          <i className="fas fa-pen"></i>
        </button>{' '}
        <button
          className="btn-delete task-btn"
          onClick={() => removeTask(task.id)}
        >
          <i className="fa fa-trash-alt"></i>
        </button>
      </div>
    </li>
  )
}

export default Task
