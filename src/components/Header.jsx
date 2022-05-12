import { useList } from '../context/ListProvider';

export default function Header() {
  const { shoppingList } = useList();
  return <div>Number of items left to get: {shoppingList.length - 1}</div>;
}
