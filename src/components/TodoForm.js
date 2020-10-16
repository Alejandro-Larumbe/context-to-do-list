import React from 'react';
import TodoContext from '../contexts/TodoContext'
import AppWithContext from '../AppWithContext';

class TodoForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: "",
        }
        // TODO: set default inputValue state
    }

    // console.log(props)

    handleInputChange = (e) => {
        this.setState({
            inputValue: e.target.value,
        })
        // TODO: Update `inputValue` state
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // debugger
        this.props.createTask(this.state.inputValue)

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Add a todo"
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}

                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

const TodoFormWithContext = () => {
    // TODO: Use a Consumer component to wrap the TodoForm
    return (
        <TodoContext.Consumer>
            {(value) => {
                // console.log("value: ", value)
                return (
                    <TodoForm  createTask={value.createTask}/>
                )
            }}
        </TodoContext.Consumer>
    )
    // TODO: Pass the `createTask` method stored in the context value as a prop to TodoForm
}

export default TodoFormWithContext;
