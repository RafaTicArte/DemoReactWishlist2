import { useEffect } from 'react';
import WishItem from './WishItem';
import { WishType } from '../hooks/Types';

interface WishListProps {
  wishes: WishType[],
  onWishChange: (wish: WishType) => void
}

/**
 * Callback to run when a wish changes.
 * @callback onWishChange - Callback to run when a wish changes.
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
 * @param {onWishChange} callback - Callback to run when a wish changes.
 */
function WishList({ wishes, onWishChange }: WishListProps) {
  useEffect(() => {
    console.log(`Render WishList x${wishes.length}`);
  });

  return (
    <ul className="wish-list">
      {wishes.map(({ id, done, text }) => (
        <WishItem
          key={id}
          wishItem={{ id, done, text }}
          onDoneChange={(updatedWish: WishType) => {
            onWishChange(updatedWish);
          }}
        />
      ))}
    </ul>
  );
}

export default WishList;
