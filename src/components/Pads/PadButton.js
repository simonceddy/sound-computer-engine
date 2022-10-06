import './PadButton.css';

function PadButton({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`pad-button flex flex-col justify-end items-start p-0.5 text-sm ${className}`}
      type="button"
    >
      {children}
    </button>
  );
}

export default PadButton;
