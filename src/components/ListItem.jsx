import { useState } from 'react';
import { useList } from '../context/ListProvider';

export default function ListItem({ listItem }) {
  const { handleUpdateItem, handleDeleteItem } = useList();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <li key={listItem.id}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '.3rem',
          }}
        >
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
          {isEditing ? (
            <>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setIsEditing(false);
                }}
              >
                <input
                  value={listItem.text}
                  onChange={(event) => {
                    handleUpdateItem({
                      ...listItem,
                      text: event.target.value,
                    });
                  }}
                />
              </form>
              <button type="button" onClick={() => setIsEditing(false)}>
                Save
              </button>
            </>
          ) : (
            <>
              <p
                style={{
                  textDecoration: listItem.gotIt && 'line-through',
                }}
              >
                {listItem.text}
              </p>
              <button type="button" onClick={() => setIsEditing(true)}>
                Edit
              </button>
            </>
          )}

          <button type="button" onClick={() => handleDeleteItem(listItem.id)}>
            Delete
          </button>
        </div>
      </li>
    </>
  );
}
