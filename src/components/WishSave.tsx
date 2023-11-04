interface WishSaveProps {
  onSaveWishes: () => void;
}

/**
 * Callback to run when a user clicks it.
 * @callback onSaveWishes - Callback to run when a wish changes.
 */

/**
 * Render a button action.
 * @param {onSaveWishes} callback - Callback to run when a user clicks it.
 */
function WishSave({ onSaveWishes }: WishSaveProps) {
  return <input type="button" value="Save" onClick={onSaveWishes} />;
}

export default WishSave;
