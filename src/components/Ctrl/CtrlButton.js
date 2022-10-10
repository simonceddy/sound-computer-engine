import { forwardRef } from 'react';
import './CtrlButton.css';

const CtrlButton = forwardRef(({
  children,
  onClick,
  className,
  label = '',
  fnLabel = '',
  onKeyDown
}, ref) => (
  <div className="ctrl-button-box flex flex-col justify-center items-center">
    <span className="ctrl-button-label uppercase text-center fn-label">{fnLabel}</span>
    <button
      onKeyDown={onKeyDown}
      ref={ref}
      onClick={onClick}
      type="button"
      className={`ctrl-button ${className}`}
    >
      {children}
    </button>
    <span className="ctrl-button-label uppercase text-center">{label}</span>
  </div>
));

export default CtrlButton;
