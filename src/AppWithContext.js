import React from 'react';
import TodoContext from './contexts/TodoContext'
import App from './App'

class AppWithContext extends React.Component {
    constructor() {
        super();
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        // TODO: Set up default state (tasks, createTask, deleteTask)
        this.state = {
            createTask: this.createTask,
            deleteTask: this.deleteTask,
            tasks: storedTasks ? storedTasks : {},
        }
    }

    createTask = (task) => {
        // TODO: Use the built-in Date `getTime` method to generate the `nextTaskId` for the `newTask`
        const nextTaskId = new Date().getTime();

        // TODO: Generate a `newTask` object, structured with proper "state shape"
        const newTask = {
            [nextTaskId]: {
                id: nextTaskId,
                message: task,
            }
        }
        debugger
        // TODO: Update the `tasks` state
        this.setState((state, props) => ({
            tasks: { ...state.tasks, ...newTask }
        }), () => this.updateLocalStorageTasks());
    }

    // TODO: Invoke the `updateLocalStorageTasks` method


    deleteTask = (id) => {
        // TODO: Delete the task based on the task `id`
        // TODO: Update the `tasks` state
        // TODO: Invoke the `updateLocalStorageTasks` method
        this.setState((state, props) => {
            const tasksWithDeletion = { ...state.tasks };
            delete tasksWithDeletion[id];
            return {
                tasks: tasksWithDeletion
            }
        }, () => this.updateLocalStorageTasks());
    }

    updateLocalStorageTasks = () => {
        console.log(this.state.tasks);
        const jsonTasks = JSON.stringify(this.state.tasks);
        localStorage.setItem('tasks', jsonTasks);
    }

    render() {
        return (
            <>
                <TodoContext.Provider value={this.state}>
                    <App />
                </TodoContext.Provider>
            </>
            // TODO: Use a Provider component to wrap the App component
            // TODO: Use the AppWithContext state as the Provider component's `value`
        )
    }
}


export default AppWithContext;
