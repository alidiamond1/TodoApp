import React, { useContext, useMemo } from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { state } = useContext(TodoContext);
  const { todos, filter } = state;

  const filteredTodos = useMemo(() => {
    if (filter === 'completed') {
      return todos.filter(todo => todo.completed);
    } else if (filter === 'active') {
      return todos.filter(todo => !todo.completed);
    }
    return todos;
  }, [todos, filter]);

  return (
    <ul className="space-y-2">
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;