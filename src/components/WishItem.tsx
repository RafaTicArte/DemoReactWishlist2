import { useEffect } from 'react';
import ClassNames from 'classnames';
import { WishType } from '../hooks/Types';

interface WishItemProps {
  wishItem: WishType;
  onDoneChange: (wish: WishType) => void;
}

/**
 * Callback to run when a wish changes.
 * @callback onDoneChange - Callback to run when a wish changes.
 * @param {Object} updatedWish - Wish updated.
 * @param {String} updatedWish.id - Identifier of a wish.
 * @param {String} updatedWish.text - Text of a wish.
 * @param {Boolean} updatedWish.done - Done/Pending wish.
 */

/**
 * Render a wish.
 * @param {Object} wishItem - Wish.
 * @param {String} wishItem[].id - Identifier of a wish.
 * @param {String} wishItem[].text - Text of a wish.
 * @param {Boolean} wishItem[].done - Done/Pending wish.
 * @param {onDoneChange} callback - Callback to run when a done/pending wish changes.
 */
function WishItem({ wishItem, onDoneChange }: WishItemProps) {
  useEffect(() => {
    console.log(`Render WishItem: ${wishItem.text}`);
  });

  return (
    <li
      className={ClassNames('wish-list__item', {
        'wish-list__item--done': wishItem.done,
      })}
    >
      <input
        id={`wishItem-${wishItem.id}`}
        type="checkbox"
        defaultChecked={wishItem.done}
        onChange={(event) => {
          onDoneChange({
            id: wishItem.id,
            done: event.target.checked,
            text: wishItem.text,
          });
        }}
      />
      <label htmlFor={`wishItem-${wishItem.id}`}>{wishItem.text}</label>
    </li>
  );
}

export default WishItem;
