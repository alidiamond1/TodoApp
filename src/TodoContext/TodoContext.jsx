import React, { createContext, useReducer, useEffect } from 'react';
import useLocalStorage from '../Hook/useLocalStorage';

const TodoContext = createContext();

const initialState = {
  todos: [],
  filter: 'all'
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'REMOVE_TODO':
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    case 'SET_TODOS':
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};

const TodoProvider = ({ children }) => {
  const [storedTodos, setStoredTodos] = useLocalStorage('todos', []);
  const [state, dispatch] = useReducer(reducer, { ...initialState, todos: storedTodos });

  useEffect(() => {
    setStoredTodos(state.todos);
  }, [state.todos, setStoredTodos]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider; 
export { TodoContext }; 