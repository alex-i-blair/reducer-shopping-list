import App from './App';
import {
  screen,
  render,
  fireEvent,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('shopping list behavioral tests', () => {
  it('should be able to add items to a shopping list reflected in header count; check box click to mark as "gotIt" reflected in header count; delete button to remove reflected in header count; edit button to change text', () => {
    render(<App />);
    screen.getByText(/number of items left to get: 0/i);
    const inputItem = screen.getByPlaceholderText(/add to shopping list/i);
    userEvent.type(inputItem, 'butter{enter}');
    screen.getByPlaceholderText(/add to shopping list/i);
    screen.getByText(/butter/i);
    const checkbox = screen.getByRole('checkbox');
    const remove = screen.getByRole('button', { name: /delete/i });
    const edit = screen.getByRole('button', { name: /edit/i });
    userEvent.click(edit);
    waitForElementToBeRemoved(edit);
    const save = screen.getByRole('button', { name: /save/i });
    let editItem = screen.getByDisplayValue(/butter/i);
    userEvent.type(editItem, '{delete}{delete}');
    editItem = screen.getByDisplayValue(/butt/i);
    userEvent.click(save);
    const edited = screen.getByText(/butt/i);
    screen.getByText(/number of items left to get: 1/i);
    userEvent.click(checkbox);
    screen.getByText(/number of items left to get: 0/i);
    userEvent.click(checkbox);
    screen.getByText(/number of items left to get: 1/i);
    userEvent.click(remove);
    screen.getByText(/number of items left to get: 0/i);
    userEvent.type(inputItem, 'butter{enter}');
    screen.getByText(/butter/i);
    userEvent.type(inputItem, 'more butter{enter}');
    screen.getByText(/more butter/i);
    userEvent.type(inputItem, 'all the butter{enter}');
    screen.getByText(/all the butter/i);
    screen.getByText(/number of items left to get: 3/i);
  });
});
