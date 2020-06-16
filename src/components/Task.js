import React from 'react'

export default class Task extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <li className="d-flex justify-content-between my-2">
                <input type="text" value = {this.props.title} onChange={(e) =>
                this.props.handleEdit(this.props.id, e.target.value)}/>
                {/* <h6>{this.props.title}</h6> */}
                <div className="icons">
                    <span className="mx-2 text-danger" onClick={this.props.handleDelete}>
                        <i className="fas fa-trash" />
                    </span>
                </div>
            </li>
        );
    }
}
