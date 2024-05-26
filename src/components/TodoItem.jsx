import React, { useContext, useCallback } from 'react';
import { TodoContext } from '../TodoContext/TodoContext';

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  const toggleTodo = useCallback(() => {
    dispatch({ type: 'TOGGLE_TODO', payload: todo.id });
  }, [dispatch, todo.id]);

  const removeTodo = useCallback(() => {
    dispatch({ type: 'REMOVE_TODO', payload: todo.id });
  }, [dispatch, todo.id]);

  return (
    <li className="flex justify-between items-center bg-gray-100 p-2 rounded shadow">
      <span
        className={`flex-grow cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
        onClick={toggleTodo}
      >
        {todo.text}
      </span>
      <button
        className="ml-2 bg-red-500 text-white p-1 rounded hover:bg-red-700"
        onClick={removeTodo}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;