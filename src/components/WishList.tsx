import { useEffect } from 'react';
import WishItem from './WishItem';
import { WishType } from '../hooks/Types';

/**
 * Props for {@link WishList}.
 * @category Props
 */
export interface WishListProps {
  /** Wish data. */
  wishes: WishType[];
  /** Update a wish. */
  onUpdateWish: (wish: WishType) => void;
}

/**
 * Render a list of wishes.
 *  
 * @category Components
 */
function WishList({ wishes, onUpdateWish }: WishListProps) {
  useEffect(() => {
    console.log(`Render WishList x${wishes.length}`);
  });

  function changeWish(alterWish: WishType) {
    onUpdateWish(alterWish);
  }

  return (
    <ul className="list-group mb-3">
      {wishes.map(({ id, done, text }) => (
        <WishItem key={id} wishItem={{ id, done, text }} onUpdateWish={changeWish} />
      ))}
    </ul>
  );
}

export default WishList;
