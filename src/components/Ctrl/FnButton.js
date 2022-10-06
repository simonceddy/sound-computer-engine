import { useEffect, useRef } from 'react';
import CircleButton from './CircleButton';
import './FnButton.css';

function FnButton() {
  const ref = useRef(null);

  useEffect(() => {
    let init = false;
    if (!init && ref.current) {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Shift') {
          ref.current.classList.add('shiftkey-down');
        }
        document.addEventListener('keyup', (ev) => {
          if (ev.key === 'Shift') {
            ref.current.classList.remove('shiftkey-down');
          }
        });
      });
    }
    return () => {
      init = true;
    };
  });
  return (
    <div className="fn-button-container">
      <CircleButton
        ref={ref}
        className="fn-button"
        onClick={() => console.log('fn key')}
        // radius={15}
      >
        fn
      </CircleButton>
    </div>
  );
}

export default FnButton;
