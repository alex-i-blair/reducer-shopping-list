import { useList } from '../context/ListProvider';

export default function Header() {
  const { shoppingList } = useList();
  const dontGotIt = shoppingList.filter((listItem) => listItem.gotIt === false);
  return <div>Number of items left to get: {dontGotIt.length}</div>;
}
