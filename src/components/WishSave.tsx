/**
 * Props for {@link WishSave}.
 * @category Props
*/
export interface WishSaveProps {
  /** Save a wish. */
  onSaveWishes: () => void;
}

/**
 * Render a save button.
 *  
 * @category Components
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
