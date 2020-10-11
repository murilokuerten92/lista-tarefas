import React, { createContext, useState, useEffect } from 'react'
import uuid from 'uuid'

export const TaskListContext = createContext()

const TaskListContextProvider = props => {
  const initialState = JSON.parse(localStorage.getItem('tasks')) || []

  const [tasks, setTasks] = useState(initialState)

  const [editItem, setEditItem] = useState(null)

useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}, [initialState])

  // Add tasks
  const addTask = title => {
    setTasks([...tasks, { title, id: uuid(), complete: false }])
  }

  // Remove tasks
  const removeTask = id => {

    setTasks(tasks.filter(task => task.id !== id));
  }

  const completedList = () => {

    const array = initialState.filter(task => task.complete === true)

    setTasks(array)

      localStorage.getItem('tasks', JSON.stringify(array))

  }

  const incompleteList = () => {
    const array = initialState.filter(task => task.complete === false)

    setTasks(array)

    localStorage.getItem('tasks', JSON.stringify(array))
  }

  const allTasks = () => {

    setTasks(initialState)
  }

  // Find task
  const findItem = id => {

    const item = tasks.find(task => task.id === id)

    setEditItem(item)
  }

  // Edit task
  const editTask = (title, id) => {

    const newTasks = tasks.map(task => (task.id === id ? { title, id } : task))



    setTasks(newTasks)
    setEditItem(null)
  }

  const setStatusTask = (id, status) => {
    console.log(id, status)
    setTasks(tasks.map(task => task.id === id ? { ...task, complete: status } : task))
  }

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        completedList,
        incompleteList,
        allTasks,
        findItem,
        editTask,
        setStatusTask,
        editItem
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  )
}

export default TaskListContextProvider
