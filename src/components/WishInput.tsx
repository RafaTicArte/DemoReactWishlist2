import { useEffect, useRef } from 'react';
import { WishType } from '../hooks/Types';

/**
 * Props for {@link WishInput}.
 * @category Props
 */
export interface WishInputProps {
  /** Create a new wish. */
  onNewWish: (wish: WishType) => void;
}

/**
 * Render a input text.
 *  
 * @category Components
 */
function WishInput({ onNewWish }: WishInputProps) {
  const wishInputText = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log('Render WishInput');
  });

  function checkNewWish(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && wishInputText.current!.value.length > 0) {
      console.log(`New Wish: ${wishInputText.current!.value}`);
      onNewWish({
        id: crypto.randomUUID(),
        done: false,
        text: wishInputText.current!.value,
      });
      wishInputText.current!.value = '';
    }
  }

  return (
    <div className="mb-3">
      <label htmlFor="newWishInput" className="form-label">
        New wish
      </label>
      <input
        id="newWishInput"
        type="text"
        ref={wishInputText}
        className="form-control"
        placeholder="Enter your wish here"
        onKeyUp={checkNewWish}
      />
    </div>
  );
}

export default WishInput;
