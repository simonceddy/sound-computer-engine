import { forwardRef } from 'react';
import './RotaryKnob.css';
import useRotaryKnob from '../../hooks/useRotaryKnob';

const RotaryKnob = forwardRef((props, ref) => {
  const {
    deg, onWheel
  } = useRotaryKnob({
    infiniteTurn: true,
    value: props.value || 0,
    minKnobDeg: props.minknobdeg || -130,
    maxKnobDeg: props.maxknobdeg || 130,
    minKnobVal: props.minknobval || 0,
    maxKnobVal: props.maxknobval || 12,
  }, props.onChange || null);
  return (
    <div
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
