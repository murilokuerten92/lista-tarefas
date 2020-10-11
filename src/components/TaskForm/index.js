import React, { useState, useContext, useEffect } from 'react'
import { TaskListContext } from '../../contexts/TaskListContext'

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
        <button type="submit" className="btn add-task-btn">
          {editItem ? 'Alterar' : 'Criar'}
        </button>
        <input
          type="text"
          placeholder="Adicionar Tarefa..."
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          className="task-input"
        />

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
