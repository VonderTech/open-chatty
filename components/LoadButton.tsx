/**
 * Represents a button component that can be used for loading data.
 */
interface LoadButtonProps {
  /**
   * The function to be called when the button is clicked.
   */
  onClick: () => void;

  /**
   * A boolean value indicating whether the button is in a loading state.
   */
  isLoading: boolean;
}

/**
 * A button component that can display a loading state.
 * @param onClick - The function to be called when the button is clicked.
 * @param isLoading - A boolean value indicating whether the button is in a loading state.
 * @returns The JSX element representing the loading button.
 */
const LoadingButton = ({ onClick, isLoading }: LoadButtonProps) => {
  return (
    <button
      className="btn btn-primary w-48"
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <span className="loading loading-spinner"></span>
          Loading
        </>
      ) : (
        'Send'
      )}
    </button>
  );
};

export default LoadingButton;
