import { observer } from 'mobx-react'
import React, { useState } from 'react';
import { todoStore } from '../store/todoListStore';

const TodoList = observer(() => {

    const [title, setTitle] = useState('');

    const handleAddTask = () => {
        if (title.trim()) {
            todoStore.addTask(title);
            setTitle('');
        }
    };

    return (
        <div>
            <h1>Task List</h1>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter task"
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {todoStore.tasks.map(task => (
                    <li key={task.id}>
                        <span
                            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                            onClick={() => todoStore.toggleTask(task.id)}
                        >
                            {task.title}
                        </span>
                        <button onClick={() => todoStore.removeTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
})

export default TodoList