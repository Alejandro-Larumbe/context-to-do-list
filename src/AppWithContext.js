import React from 'react';
import TodoContext from './contexts/TodoContext'
import App from './App'

class AppWithContext extends React.Component {
    constructor() {
        super();
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        // TODO: Set up default state (tasks, createTask, deleteTask)
    }

    createTask = (task) => {
        // TODO: Use the built-in Date `getTime` method to generate the `nextTaskId` for the `newTask`
        // TODO: Generate a `newTask` object, structured with proper "state shape"
        // TODO: Update the `tasks` state
        // TODO: Invoke the `updateLocalStorageTasks` method
    }

    deleteTask = (id) => {
        // TODO: Delete the task based on the task `id`
        // TODO: Update the `tasks` state
        // TODO: Invoke the `updateLocalStorageTasks` method
    }

    updateLocalStorageTasks = () => {
        console.log(this.state.tasks);
        const jsonTasks = JSON.stringify(this.state.tasks);
        localStorage.setItem('tasks', jsonTasks);
    }

    render() {
        return (
            // TODO: Use a Provider component to wrap the App component
            // TODO: Use the AppWithContext state as the Provider component's `value`
        )
    }
}

export default AppWithContext;
