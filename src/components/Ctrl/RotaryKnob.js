/* eslint-disable no-unused-vars */
import { forwardRef, useState } from 'react';
import getDeg from '../../util/getDeg';
import './RotaryKnob.css';

const RotaryKnob = forwardRef((props, ref) => {
  const [deg, setDeg] = useState(props.deg || 0);
  const onWheel = (e) => {
    const direction = e.deltaY > 0 ? 'down' : 'up';
    const nextDeg = direction === 'up'
      ? deg + (e.shiftKey ? (props.shiftStep || 2) : (props.step || 5))
      : deg - (e.shiftKey ? (props.shiftStep || 2) : (props.step || 5));
    setDeg(getDeg(nextDeg));
    if (props.onChange) props.onChange(direction, deg, e);
  };

  return (
    <div
      onDoubleClick={props.onDoubleClick}
      onWheel={onWheel}
      role="presentation"
      style={{
        transform: `rotate(${deg}deg)`
      }}
      ref={ref}
      className="rotary-knob rounded-full"
    >
      {props.children}
    </div>
  );
});

export default RotaryKnob;
