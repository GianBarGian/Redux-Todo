import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { completedTodo, deleteTodo } from '../actions/actions';
import TodoItem from './TodoItem'


export  class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.todos.map(todo => (
                        <TodoItem 
                            key={todo.id} 
                            id={todo.id}
                            completed={todo.completed}
                            completedTodo={this.props.completedTodo}
                            text={todo.text}
                            deleteTodo={this.props.deleteTodo}
                        />
                    ))
                }
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      completedTodo,
      deleteTodo,
    }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);