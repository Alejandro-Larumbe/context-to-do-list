import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        // TODO: set default inputValue state
    }

    handleInputChange = (e) => {
        // TODO: Update `inputValue` state
    }

    handleSubmit = (e) => {
        e.preventDefault();

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Add a todo"
                    // value={set the inputValue state as the input's value}
                    onChange={this.handleInputChange}
                />
            </form>
        );
    }
}

const TodoFormWithContext = () => {
    // TODO: Use a Consumer component to wrap the TodoForm
    // TODO: Pass the `createTask` method stored in the context value as a prop to TodoForm
}

export default TodoFormWithContext;
