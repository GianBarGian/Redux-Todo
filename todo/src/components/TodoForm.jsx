import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTodo, clearCompleted } from '../actions/actions';

export class TodoForm extends React.Component {
    textRef = React.createRef()

    onAddBtn = e => {
        const textRef = this.textRef.current.value;

        e.preventDefault();
        this.props.addTodo(textRef);
        this.textRef.current.value = '';
    }

    onClearBtn = e => {
        e.preventDefault();
        this.props.clearCompleted();
    }

    render() {
        return (
            <form>
                <input ref={this.textRef} type="text" placeholder="todo"/>
                <button onClick={this.onAddBtn} >Add Todo</button>
                <button onClick={this.onClearBtn}>Clear Completed</button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
      todos: state,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      addTodo,
      clearCompleted
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);