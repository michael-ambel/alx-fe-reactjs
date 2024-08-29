import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

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

test('delet Todo item', () => {
    render(<TodoList />);
    const deletButton = screen.getAllByText('Delete')

    fireEvent.click(deletButton[0])

    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();

})