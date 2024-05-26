import React, { useContext, useCallback } from 'react';
import { TodoContext } from '../TodoContext/TodoContext';

const TodoFilter = () => {
  const { dispatch } = useContext(TodoContext);

  const setFilter = useCallback((filter) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  }, [dispatch]);

  return (
    <div className="flex justify-around my-4">
      <button
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 "
        onClick={() => setFilter('active')}
      >
        Active
      </button>
      <button
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilter;