import useRotaryKnob from '../../hooks/useRotaryKnob';
import './CtrlKnob.css';

function CtrlKnob(props) {
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
