import React from 'react';
import Checkbox from './Checkbox';

const TaskList = ({ tasks, onDeleteTask, onToggleCheckbox }) => {
    return (
        <div className='container-task-list'>
            <ul className='task-list'>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <Checkbox
                            isChecked={task.isChecked}
                            onChange={() => onToggleCheckbox(index)}
                            id={`checkbox-${index}`} // Identificador único para el checkbox
                        />
                        {task.name}
                        <button onClick={() => onDeleteTask(index)}>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default TaskList;
