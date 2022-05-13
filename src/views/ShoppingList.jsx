import { useState } from 'react';
import ListItem from '../components/ListItem';
import { useList } from '../context/ListProvider';

export default function ShoppingList() {
  const [newListItem, setNewListItem] = useState('');
  const { shoppingList, handleAddItem, handleResetList } = useList();

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
            listItem.id && <ListItem key={listItem.id} listItem={listItem} />
        )}
      </ul>
      <button
        onClick={() => {
          if (window.confirm('Are you sure you wish to delete this item?')) {
            handleResetList();
          }
        }}
      >
        Reset list
      </button>
    </>
  );
}
