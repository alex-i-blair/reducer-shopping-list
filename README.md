# Shopping List Enhanced

## Learning Objectives

- Explain how action types describe state changes
- Explain the two parameters (`state` and `action`) of the reducer function
- Explain the purpose of the `reducer` function
- Use `useReducer` to manage complex application state
- Use the `dispatch` function to dispatch actions to update state
- Use a reducer function to update state
- Use a `switch` statement to handle multiple conditions
- Use `useContext` to store global application state

## Live Example

[https://alchemy-shopping-list-enhanced.netlify.app/](https://alchemy-shopping-list-enhanced.netlify.app/)

### Description

For this deliverable, we'll be building a **Shopping List** that combines both `useReducer` and `useContext`. By doing this, we're effectively creating a simplified version of Redux. All your `useReducer` logic should be used for managing the state values in Context. Instead of having `dispatch` available in Context, make custom hooks that use `dispatch` and use those across your app.

`useReducer` provides a way for managing complex state, while `useContext` allows us to share state across our app.

In the shopping list, users can add, edit, and delete items. They can also see the number of items on their list in the header of the app.

### Acceptance Criteria

- Users are able to add a new item to the list
- Users are able to edit an existing item
- Users are able to delete an item
- Users are able to see a list of shopping items
- A separate `<Header>` component is rendered at the top of the page
  - The `<Header>` component contains the total count of the items on the shopping list
  - The `<Header>` component has a button that clears the shopping list
- (STRETCH) Users are able to mark a shopping item as done with strikethrough on text
- (STRETCH) Shopping list state is saved to localStorage and persisted on page refreshes

### Rubric

| Tasks                                             | Points |
| :------------------------------------------------ | -----: |
| Use the `useReducer` hook to manage list state    |      2 |
| Use the `useContext` hook to provide global state |      2 |
| Use a `switch` statement inside of your reducer   |      2 |
| Use the `dispatch` function to update state       |      2 |
| Set an initial value for `useReducer`             |      2 |
| Items can be added to list through a reducer      |      2 |
| Items can be edited in list through a reducer     |      2 |
| Items can be deleted from list through a reducer  |      2 |
| Behavior Testing\*                                |      2 |
| Deployed on netlify with CI passing               |      2 |

\*Behavior testing will include a test for adding to list, deleting from list,
editing a list item, and displaying a list of items
