import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { completedTodo } from '../actions/actions';


export class TodoList extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.todos.map(todo => (
                        <p onClick={e => this.props.completedTodo(e.target.id)} id={todo.id} key={todo.id}>{todo.text}</p>
                    ))
                }
            </div>
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
    }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);