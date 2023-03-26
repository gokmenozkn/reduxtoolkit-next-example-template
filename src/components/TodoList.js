import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo, deleteTodo } from '@/redux/todosSlice';
import TodoItem from './TodoItem';

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  return (
    <ul className='mt-6 divide-y divide-gray-200'>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={() => dispatch(toggleTodo(todo.id))}
          deleteTodo={() => dispatch(deleteTodo(todo.id))}
        />
      ))}
    </ul>
  );
}
