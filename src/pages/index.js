import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '@/redux/todosSlice';
import Head from 'next/head';

import TodoList from '@/components/TodoList';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    if (inputValue.trim() != '') {
      dispatch(addTodo(inputValue));
      setInputValue('');
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
      <Head>
        <title>Todo App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='relative py-3 sm:max-w-xl sm:mx-auto'>
        <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
        <div className='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20'>
          <h1 className='text-3xl font-bold text-gray-900'>Todo List</h1>
          <div className='mt-8'>
            <div className='flex space-x-2'>
              <input
                type='text'
                className='border border-gray-300 rounded-md w-full py-2 px-3'
                placeholder='Add a new todo'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button
                className='bg-blue-500 text-white rounded-md py-2 px-3'
                onClick={handleAddTodo}
              >
                Add
              </button>
            </div>
            {/* <ul className='mt-6 divide-y divide-gray-200'>
              {todos.map((todo) => (
                // <li
                //   key={todo.id}
                //   className={`${
                //     todo.completed ? 'line-through text-gray-500' : ''
                //   } py-4 flex items-center justify-between`}
                // >
                //   <span>{todo.text}</span>
                //   <div className='flex space-x-2'>
                //     <button
                //       className={`${
                //         todo.completed
                //           ? 'bg-gray-200'
                //           : 'bg-green-500 hover:bg-green-600'
                //       } text-white rounded-md py-2 px-3`}
                //       onClick={() => handleToggleTodo(todo.id)}
                //     >
                //       {todo.completed ? 'Done' : 'Mark Done'}
                //     </button>
                //     <button
                //       className='bg-red-500 text-white rounded-md py-2 px-3 hover:bg-red-600'
                //       onClick={() => handleDeleteTodo(todo.id)}
                //     >
                //       Delete
                //     </button>
                //   </div>
                // </li>
                ))}
            </ul> */}
            <TodoList todos={todos} />
          </div>
        </div>
      </div>
    </div>
  );
}
