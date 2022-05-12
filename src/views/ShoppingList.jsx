import { useState, useReducer } from 'react';

const initialState = [{}];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        { id: Date.now(), text: action.payload.text, gotIt: false },
        ...state,
      ];
    case 'UPDATE_ITEM':
      return state.map((listItem) => {
        if (listItem.id === action.payload.listItem.id) {
          const { gotIt, text } = action.payload.listItem;
          return {
            ...listItem,
            gotIt,
            text,
          };
        }
        return listItem;
      });
  }
};

export default function ShoppingList() {
  const [newListItem, setNewListItem] = useState('');
  const [shoppingList, dispatch] = useReducer(reducer, initialState);

  const handleAddItem = (text) => {
    dispatch({ type: 'ADD_ITEM', payload: { text } });
  };
  const handleUpdateItem = (listItem) => {
    dispatch({ type: 'UPDATE_ITEM', payload: { listItem } });
  };
  const handleDeleteItem = (id) => {
    dispatch({ type: 'DELETE_ITEM', payload: { id } });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddItem(newListItem);

    setNewListItem('');
  };
  return (
    <>
      <header>{shoppingList.length - 1}</header>
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
            listItem.id && (
              <li key={listItem.id}>
                <div>
                  <input
                    type="checkbox"
                    checked={listItem.gotIt}
                    onChange={(event) => {
                      handleUpdateItem({
                        ...listItem,
                        gotIt: event.target.checked,
                      });
                    }}
                  />
                </div>
                {listItem.text}
              </li>
            )
        )}
      </ul>
    </>
  );
}
