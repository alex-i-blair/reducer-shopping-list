import Header from './components/Header';
import { ListProvider } from './context/ListProvider';
import ShoppingList from './views/ShoppingList';

export default function App() {
  return (
    <>
      {/* <ListProvider> */}
      <Header />
      <ShoppingList />
      {/* </ListProvider> */}
    </>
  );
}
