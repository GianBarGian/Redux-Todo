import React, { Component } from 'react';
import styled from 'styled-components';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


class App extends Component {
  render() {
    return (
      <StyledApp>
        <TodoList />
        <TodoForm />
      </StyledApp>
    );
  }
}

const StyledApp = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export default App;
