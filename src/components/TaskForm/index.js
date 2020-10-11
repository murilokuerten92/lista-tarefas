import React, { useState, useContext, useEffect } from 'react'
import { TaskListContext } from '../../contexts/TaskListContext'

import './styles.css'

const TaskForm = () => {
  const { addTask, completedList, incompleteList, allTasks, editTask, editItem } = useContext(TaskListContext)
  const [title, setTitle] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!editItem) {
      addTask(title)
      setTitle('')
    } else {
      editTask(title, editItem.id)
    }
  }

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
      console.log(editItem)
    } else {
      setTitle('')
    }
  }, [editItem])

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className='form-submit'>
          <input
            type="text"
            placeholder="Adicionar Tarefa..."
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            className="task-input"
          />
        </div>
        <button type="submit" className="btn button-add">
          {editItem ? 'Alterar' : 'Gravar'}
        </button>
      </form>

      <div className="buttons">

        <button className="btn clear-btn" onClick={incompleteList}>
          Abertas
        </button>
        <button className="btn clear-btn" onClick={completedList}>
          Concluídas
        </button>
        <button className="btn clear-btn" onClick={allTasks}>
          Todas
        </button>
      </div>

    </>
  )
}

export default TaskForm
