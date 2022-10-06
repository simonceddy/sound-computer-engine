/* eslint-disable no-unused-vars */
// import { throttle } from 'lodash';
import { useEffect, useState } from 'react';

const defaultOpts = {
  value: 0,
  minKnobVal: 0,
  maxKnobVal: 12,
  maxKnobDeg: 130,
  minKnobDeg: -130,
  infiniteTurn: false
};

function useRotaryKnob(opts = defaultOpts, callback = null) {
  const props = { ...defaultOpts, ...opts };

  const step = ((-1 * props.minKnobDeg) + props.maxKnobDeg) / (props.maxKnobVal - props.minKnobVal);

  const getAngle = (val) => {
    let dg = props.minKnobDeg + (val * step);
    if (dg >= 360) dg -= 360;
    return dg;
  };
  const iVal = props.value
  && props.value >= props.minKnobVal
  && opts.value <= props.maxKnobVal ? props.value : props.minKnobVal;
  const [values, setValues] = useState({
    value: iVal,
    deg: getAngle(iVal)
  });

  const moveKnob = (direction) => {
    if (direction === 'up') {
      if (props.infiniteTurn || (values.value + 1) <= props.maxKnobVal) {
        setValues({
          value: values.value + 1,
          deg: getAngle(values.value + 1),
        });
      // } else if (props.infiniteTurn) {
      //   setValues({
      //     value: props.minKnobVal,
      //     deg: props.minKnobDeg
      //   });
      }
    } else if (direction === 'down') {
      if (props.infiniteTurn || (values.value - 1) >= props.minKnobVal) {
        setValues({
          value: values.value - 1,
          deg: getAngle(values.value - 1),
        });
      // } else if (props.infiniteTurn) {
      //   setValues({
      //     value: props.maxKnobVal,
      //     deg: props.maxKnobDeg
      //   });
      }
    }
  };

  const handleMove = (e) => {
    if (e.deltaY > 0) {
      moveKnob('down');
    } else {
      moveKnob('up');
    }
    return false;
  };

  const onWheel = (e) => {
    // TODO handle shift
    if (e.shiftKey) {
      console.log(e);
    } else {
      handleMove(e);
    }
  };

  const setValue = (val) => setValues({ ...values, value: val, deg: getAngle(val) });

  useEffect(() => {
    if (callback) callback(values.value);
  }, [values.value]);

  return { ...values, onWheel, setValue };
}

export default useRotaryKnob;
