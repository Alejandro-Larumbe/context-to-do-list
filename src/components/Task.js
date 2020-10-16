import React from 'react';
import TodoContext from '../contexts/TodoContext';


// class Task extends React.Component {
//     static contextType = TodoContext;

//     constructor(props) {
//         super(props)

//     }

//     handleClick = (e) => {
//         console.log(this.context);
//     }

//     render(props) {
//         return (
//             <li>
//                 <h1>{props.message}</h1>
//                 <button onClick={handleClick}>Delete Task</button>
//             </li>
//         )
//     }
// }

const Task = (props) => {

    const handleClick = (e) => {
        props.deleteTask(e.target.id)
    }

    return (
        <li>
            <h1>{props.task.message}</h1>
            <button onClick={handleClick}>Delete Task</button>
        </li>
    );
}

export default Task;
