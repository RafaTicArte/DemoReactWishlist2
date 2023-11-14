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
  return (
    <div className="mb-3">
      <input
        type="button"
        className="form-control btn btn-primary"
        value="Save"
        onClick={onSaveWishes}
      />
    </div>
  );
}

export default WishSave;
