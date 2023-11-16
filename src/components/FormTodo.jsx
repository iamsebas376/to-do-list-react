import React, { useState } from 'react';

const FormTodo = ({ onAddTask }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task) {
            onAddTask(task);
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='container-input'>
                <input
                    className='input-tasks'
                    type="text"
                    placeholder="Add a new task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button type="submit"><i className="fa-solid fa-plus"></i></button>
            </div>
        </form>
    );
};
export default FormTodo;
