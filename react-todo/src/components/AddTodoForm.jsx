import { useState } from 'react';

const AddTodoForm = (props) => {
  const [newTodo, setNewTodo] = useState('');
// eslint-disable-next-line react/prop-types
const onAddTodo = props.onAddTodo;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return; // Prevent adding empty todos
    onAddTodo(newTodo); // Call the function passed via props
    setNewTodo(''); // Clear the input field
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;