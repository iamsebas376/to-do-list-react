import React, { useState } from 'react';
import Container from './components/Container';
import FormTodo from './components/FormTodo';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    const newTask = { name: taskName, isChecked: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleCheckbox = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, isChecked: !task.isChecked };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div>
      <Container>
        <h1 className='title'>To Do List</h1>
        <FormTodo onAddTask={addTask} />
        <TaskList tasks={tasks} onDeleteTask={deleteTask} onToggleCheckbox={toggleCheckbox} />
      </Container>
    </div>
  );
}
export default App;
