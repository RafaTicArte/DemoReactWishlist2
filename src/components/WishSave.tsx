interface WishSaveProps {
  onWishesSave: () => void;
}

/**
 * Callback to run when a user clicks it.
 * @callback onWishesSave - Callback to run when a wish changes.
 */

/**
 * Render a button action.
 * @param {onWishesSave} callback - Callback to run when a user clicks it.
 */
function WishSave({ onWishesSave }: WishSaveProps) {
  return <input type="button" value="Save" onClick={onWishesSave} />;
}

export default WishSave;
