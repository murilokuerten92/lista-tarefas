import React, { createContext, useState, useEffect } from 'react'
import uuid from 'uuid'

export const TaskListContext = createContext()

const TaskListContextProvider = ({ children }) => {
    const initialState = JSON.parse(localStorage.getItem('tasks')) || []

    const [tasks, setTasks] = useState(initialState)
    const [filteredTasks, setFilteredTasks] = useState(initialState)

    const [editItem, setEditItem] = useState(null)

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    // Add tasks
    const addTask = title => {
        const newId = uuid();
        setTasks([...tasks, { title, id: newId, complete: false }])
        setFilteredTasks([...filteredTasks, { title, id: newId, complete: false }])
    }

    // Remove tasks
    const removeTask = id => {
        setTasks(tasks.filter(task => task.id !== id));
        setFilteredTasks(filteredTasks.filter(task => task.id !== id));
    }

    const completedList = () => {
        const array = tasks.filter(task => task.complete === true)

        setFilteredTasks(array)
    }

    const incompleteList = () => {

        const array = tasks.filter(task => task.complete === false)

        setFilteredTasks(array)

    }

    const allTasks = () => {
        setFilteredTasks(tasks)
    }

    // Find task
    const findItem = id => {
        // não modificado
        const item = tasks.find(task => task.id === id)
        setEditItem(item)
    }

    // Edit task
    const editTask = (title, id) => {
        // não modificado
        const newTasks = tasks.map(task => (task.id === id ? { title, id } : task))

        setTasks(newTasks)
        setEditItem(null)
    }

    const setStatusTask = (id, status) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, complete: status } : task))
        setFilteredTasks(filteredTasks.map(task => task.id === id ? { ...task, complete: status } : task))
    }

    return (
        <TaskListContext.Provider
            value={{
                tasks,
                filteredTasks,
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
            {children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider