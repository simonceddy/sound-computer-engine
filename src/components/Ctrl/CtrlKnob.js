import { useState } from 'react';
import getDeg from '../../util/getDeg';
// import useRotaryKnob from '../../hooks/useRotaryKnob';
import './CtrlKnob.css';

function CtrlKnob(props) {
  const [deg, setDeg] = useState(props.deg || 0);
  const onWheel = (e) => {
    const direction = e.deltaY > 0 ? 'down' : 'up';
    const nextDeg = direction === 'up'
      ? deg + (e.shiftKey ? 2 : 12)
      : deg - (e.shiftKey ? 2 : 12);
    setDeg(getDeg(nextDeg));
    if (props.onChange) props.onChange(direction);
  };

  return (
    <div
      style={{
        transform: `rotate(${deg}deg)`
      }}
      role="presentation"
      onWheel={onWheel}
      className="rounded-full ctrl-knob flex flex-col justify-start items-center p-1"
    >
      <div className="rounded-full w-6 h-6 bg-black bg-opacity-40" />
    </div>
  );
}

export default CtrlKnob;
