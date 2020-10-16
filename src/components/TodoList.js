import React from 'react';
import Task from './Task';
import TodoContext from '../contexts/TodoContext';

class TodoList extends React.Component {
    static contextType = TodoContext;
    render() {
        const items = [...Object.values(this.context.tasks)]
        const { tasks, deleteTask } = this.context
        return (
            <ul>
                {items.map((task, i) => (
                    <Task key={task.id} task={task} deleteTask={deleteTask}></Task>
                ))}
            </ul>
        )
    }
}

export default TodoList;
