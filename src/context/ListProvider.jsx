import { createContext, useContext, useReducer } from 'react';

const initialState = [];

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
    case 'DELETE_ITEM':
      return state.filter((listItem) => listItem.id !== action.payload.id);
    case 'RESET_LIST':
      return initialState;
  }
};

const ListContext = createContext();

export function ListProvider({ children }) {
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
  const handleResetList = () => {
    dispatch({ type: 'RESET_LIST' });
  };

  return (
    <ListContext.Provider
      value={{
        shoppingList,
        handleAddItem,
        handleUpdateItem,
        handleDeleteItem,
        handleResetList,
      }}
    >
      {children}
    </ListContext.Provider>
  );
}

export const useList = () => {
  const context = useContext(ListContext);
  if (context === undefined)
    throw new Error('useList must be called from within a ListProvider');

  return context;
};
