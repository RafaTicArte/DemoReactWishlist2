import { useEffect } from 'react';
import WishItem from './WishItem';
import { WishType } from '../hooks/Types';

interface WishListProps {
  wishes: WishType[];
  onUpdateWish: (wish: WishType) => void;
}

/**
 * Callback to run when a wish changes.
 * @callback onChangeWish - Callback to run when a wish changes.
 * @param {Object} updatedWish - Wish updated.
 * @param {String} updatedWish.id - Identifier of a wish.
 * @param {String} updatedWish.text - Text of a wish.
 * @param {Boolean} updatedWish.done - Done/Pending wish.
 */

/**
 * Render list of wishes.
 * @param {Object[]} wishes - Array of wishes.
 * @param {String} wishes[].id - Identifier of a wish.
 * @param {String} wishes[].text - Text of a wish.
 * @param {Boolean} wishes[].done - Done/Pending wish.
 * @param {onUpdateWish} callback - Callback to run when a wish changes.
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
