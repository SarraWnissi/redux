import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

const TodoList =()=> {
  const todos = useSelector((state) =>state.todo.todolist);
  console.log(todos);
  return (
    <div className='todo-list'>
      <AddTodo/>
      {todos.map((todo)=>(<TodoItem todo={todo} />))}
    </div>
  );
}
export default TodoList;
