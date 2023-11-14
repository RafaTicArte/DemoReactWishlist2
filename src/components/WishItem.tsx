import { useEffect, useState, useRef } from 'react';
import ClassNames from 'classnames';
import { WishType } from '../hooks/Types';

interface WishItemProps {
  wishItem: WishType;
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
 * Render a wish.
 * @param {Object} wishItem - Wish.
 * @param {String} wishItem[].id - Identifier of a wish.
 * @param {String} wishItem[].text - Text of a wish.
 * @param {Boolean} wishItem[].done - Done/Pending wish.
 * @param {onChangeWish} callback - Callback to run when a done/pending wish changes.
 */
function WishItem({ wishItem, onUpdateWish }: WishItemProps) {
  const [showModal, setShowModal] = useState(false);

  const wishEditText = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(`Render WishItem: ${wishItem.text}`);
  });

  function launchEditWish() {
    setShowModal(true);
  }

  function closeEditWish() {
    setShowModal(false);
  }

  function doneChangeWish(event: React.ChangeEvent<HTMLInputElement>) {
    onUpdateWish({
      id: wishItem.id,
      done: event.target.checked,
      text: wishItem.text,
    });
  }

  function textChangeWish() {
    onUpdateWish({
      id: wishItem.id,
      done: wishItem.done,
      text: wishEditText.current!.value,
    });
    closeEditWish();
  }

  return (
    <li className="list-group-item">
      <input
        id={`wishItem-${wishItem.id}`}
        type="checkbox"
        className="form-check-input me-2"
        defaultChecked={wishItem.done}
        onChange={doneChangeWish}
      />
      <label
        htmlFor={`wishItem-${wishItem.id}`}
        className={ClassNames({
          'text-decoration-line-through': wishItem.done,
        })}
      >
        {wishItem.text}
      </label>
      <i className="ms-3 bi-pencil" onClick={launchEditWish}></i>
      <div
        className={ClassNames('modal', 'fade', { show: showModal }, { displayModal: showModal })}
        tabIndex={-1}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit text wish</h5>
              <button type="button" className="btn-close" onClick={closeEditWish}></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                ref={wishEditText}
                defaultValue={wishItem.text}
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={closeEditWish}>
                Cancel
              </button>
              <button type="button" className="btn btn-primary" onClick={textChangeWish}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default WishItem;
