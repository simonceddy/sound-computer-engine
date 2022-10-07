/* eslint-disable no-unused-vars */
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

function useStep() {
  const step = useSelector((state) => state.sequencer.step);
  const steps = useSelector((state) => state.sequencer.steps);
  const loadedSequences = useSelector((state) => state.sequencer.loadedSequences);

  const getStep = (key) => {
    // console.log(key);
    if (loadedSequences[key]) {
      const s = loadedSequences[key][steps[key] || step];
      if (s.active) console.log(key, s);
      console.log(steps[key] || step);
      return s;
    }
    return false;
  };
  return getStep;
}

export default useStep;
