import React from 'react'

export default class Form extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <h3>Task Input</h3>
                    <input
                    type="text" 
                    placeholder="What's your task?"
                    value={this.props.item}
                    onChange={this.props.handleChange}/>
                    <button type="submit">Add Task</button>
                </form>
            </div>
        );
    }
}
