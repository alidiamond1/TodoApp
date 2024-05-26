import React, { useRef, useContext } from 'react';
import { TodoContext } from '../TodoContext/TodoContext';

const TodoForm = () => {
  const { dispatch } = useContext(TodoContext);
  const inputRef = useRef();

  const addTodo = (e) => {
    e.preventDefault();
    const text = inputRef.current.value.trim();
    if (text) {
      dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), text, completed: false } });
      inputRef.current.value = '';
    }
  };

  return (
    <form onSubmit={addTodo} className="flex mb-4   ">
      <input
        ref={inputRef}
        type="text"
        placeholder="Add a todo"
        className="flex-grow p-2 border rounded-l"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-r ml-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline focus:bg-white-700 transition duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center w-10 ">
        Add
      </button>
    </form>
  );
};

export default TodoForm;