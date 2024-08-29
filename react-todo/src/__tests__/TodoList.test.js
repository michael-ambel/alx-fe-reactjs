import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { test, expect } from '@jest/globals';
import TodoList from '../components/TodoList';

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

test('delete Todo item', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText('Delete')

    fireEvent.click(deleteButton[0])

    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();

})