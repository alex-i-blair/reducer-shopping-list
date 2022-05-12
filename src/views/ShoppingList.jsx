import { useState, useReducer } from 'react';

const initialState = [{}];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        { id: Date.now(), text: action.payload.text, gotIt: false },
        ...state,
      ];
  }
};

export default function ShoppingList() {
  const [newListItem, setNewListItem] = useState('');
  const [shoppingList, dispatch] = useReducer(reducer, initialState);

  const handleAddItem = (text) => {
    dispatch({ type: 'ADD_ITEM', payload: { text } });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddItem(newListItem);

    setNewListItem('');
  };
  return (
    <>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="newListItem"
          placeholder="Add to shopping list"
          value={newListItem}
          onChange={(event) => setNewListItem(event.target.value)}
        />
      </form>
      <ul>
        {shoppingList.map(
          (listItem) =>
            listItem.id && <li key={listItem.id}>{listItem.text}</li>
        )}
      </ul>
    </>
  );
}
