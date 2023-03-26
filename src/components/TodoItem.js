export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li
      key={todo.id}
      className={`${
        todo.completed ? 'line-through text-gray-500' : ''
      } py-4 flex items-center justify-between`}
    >
      <span>{todo.task}</span>
      <div className='flex space-x-2'>
        <button
          className={`${
            todo.completed ? 'bg-gray-200' : 'bg-green-500 hover:bg-green-600'
          } text-white rounded-md py-2 px-3`}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.completed ? 'Done' : 'Mark Done'}
        </button>
        <button
          className='bg-red-500 text-white rounded-md py-2 px-3 hover:bg-red-600'
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
