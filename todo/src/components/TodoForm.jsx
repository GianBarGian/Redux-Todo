import React from 'react';
import styled from 'styled-components';
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
            <StyledForm>
                <input ref={this.textRef} type="text" placeholder="Add your Todo"/>
                    <StyledButtons>
                        <button onClick={this.onAddBtn} >Add Todo</button>
                        <button onClick={this.onClearBtn}>Clear Completed</button>
                </StyledButtons>
            </StyledForm>
        )
    }
}

const StyledForm = styled.form`
    input {
        display: block;
        width: 100%;
        &::placeholder {
            text-align: center;
        }
    }
`;

const StyledButtons = styled.div`
    display: flex;
    justify-content: space-around;
    button {
        width: 30%;
    }
`;

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