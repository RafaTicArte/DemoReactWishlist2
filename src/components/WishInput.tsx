import { useEffect, useRef } from 'react';
import { v4 as Uuid } from 'uuid';
import { WishType } from '../hooks/Types';

interface WishInputProps {
  onNewWish: (wish: WishType) => void;
}

/**
 * Render an input text for adding a new wish.
 * @param {Function} onNewWish - Callback to run when a user introduces a new wish.
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
        id: Uuid(),
        done: false,
        text: wishInputText.current!.value,
      });
      wishInputText.current!.value = '';
    }
  }

  return (
    <fieldset className="wish-input">
      <legend className="wish-input__label">New wish</legend>
      <input
        ref={wishInputText}
        className="wish-input__field"
        placeholder="Enter your wish here"
        onKeyUp={checkNewWish}
      />
    </fieldset>
  );
}

export default WishInput;
