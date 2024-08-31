const { render, screen, fireEvent } = require('@testing-library/react');
require('@testing-library/jest-dom');
const { jest, test, expect } = require('@jest/globals');
const TodoList = require('../components/TodoList');


test('render TodoList component', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument()
    expect(screen.getByText('Build a Todo List')).toBeInTheDocument()
    expect(screen.getByText('Master JavaScript')).toBeInTheDocument()
})

test('add new TodoList functionality', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a todo');
    const button = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'TypeScript' } });

    fireEvent.click(button);
  
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
})

test('toggles a todo item from incomplete to complete', () => {
    render(<TodoList />);
    expect(screen.getByLabelText('Learn React')).not.toBeChecked();
    fireEvent.click(screen.getByLabelText('Learn React'));
    expect(screen.getByLabelText('Learn React')).toBeChecked();
  });
  
  test('toggles a todo item from complete to incomplete', () => {
    render(<TodoList />);
    fireEvent.click(screen.getByLabelText('Learn React'));
    fireEvent.click(screen.getByLabelText('Learn React'));
    expect(screen.getByLabelText('Learn React')).not.toBeChecked();
  });

test('delete Todo item', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText('Delete')

    fireEvent.click(deleteButton[0])

    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();

})