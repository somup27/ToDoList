import React from 'react'
import Task from './Task';

export default class TaskList extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Your Tasks</h3>
                {this.props.tasks.map((task) => {
                    return (
                        <Task id={task.id} 
                        title={task.item}
                        handleDelete={() => this.props.handleDelete(task.id)}
                        handleEdit={this.props.handleEdit}/>
                    );
                })}
            </div>
        );
    }
}
