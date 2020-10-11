import React, { useContext } from "react";
import { TaskListContext } from "../../contexts/TaskListContext";
import Task from "../Task";

import './styles.css'

const TaskList = () => {
  const { filteredTasks } = useContext(TaskListContext);

  return (
    <>
      <div>
        {filteredTasks.length ? (
          <ul className="list">
            {filteredTasks.map(task => {
              return <Task task={task} key={task.id} />
            })}
          </ul>
        ) : (
            <div className="never-register">Nenhum registro retornado</div>
          )}
      </div>
      <div className="count-tasks">{`Quantidade de Tarefas ${filteredTasks.length}`}</div>
    </>
  );
};

export default TaskList;