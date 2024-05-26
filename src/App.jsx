import React from 'react';
import TodoProvider from './TodoContext/TodoContext';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';

const App = () => {
  return (
    <TodoProvider>
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className=" flex text-center justify-center text-3xl font-bold mb-4 ">Todo List</h1>
        <TodoForm />
        <TodoList />
        <TodoFilter />
      </div>
    </TodoProvider>
  );
};

export default App;