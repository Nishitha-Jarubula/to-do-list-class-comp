import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {
    getStyle = () => {
                     
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }



    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
                 {title}
                 <button style = {btnStyle} onClick={this.props.onDelete.bind(this,id)}>X</button>
                </p>
            </div>

        )
    }
}

const btnStyle = {
    backgroundColor: 'green',
    float: 'right'
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
    
}
export default TodoItem;