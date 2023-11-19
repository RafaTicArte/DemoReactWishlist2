import { useEffect, useState, useRef } from 'react';
import ClassNames from 'classnames';
import { WishType } from '../hooks/Types';

/**
 * Props for {@link WishItem}.
 * @category Props
 */
export interface WishItemProps {
  /** Wish data. */
  wishItem: WishType;
  /** Update a wish. */
  onUpdateWish: (wish: WishType) => void;
}

/**
 * Render a wish.
 *  
 * @category Components
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
