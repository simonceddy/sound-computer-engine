import jzz from 'jzz';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadMetadata } from '../../util/storage';
import useSimpleClock from '../clock/useSimpleClock';
import { initDisplay } from '../display/displaySlice';
import { setBooted } from './kernelSlice';

console.log(jzz.MIDI.clock().getTempo());
function getDarkMode() {
  return loadMetadata()
    .catch(console.error);
}

const audioContext = new AudioContext();
audioContext.addEventListener('play', () => {
  console.log('playing');
});

function Kernel({ children }) {
  const dispatch = useDispatch();
  // const getStep = useStep();
  useSimpleClock();
  /* (key) => {
    if (key === 'project') {
      loadedSequences
        .filter((_seq, idx) => clocks.mods[idx] === undefined)
        .forEach((_seq, idx) => onTick(idx));
    } else if (clocks.mods[key]) {
      onTick(key);
    }
  } ) */
  // useMidiClock(audioContext);
  useEffect(() => {
    let init = false;
    if (!init) {
      getDarkMode()
        .then((data) => {
          if (data) dispatch(initDisplay(data));
        })
        .then(() => {
          setTimeout(() => {
            dispatch(setBooted());
          }, 1000);
        });
    }
    return () => {
      init = true;
    };
  }, []);
  return (
    <div className="w-full h-full">
      {children}
    </div>
  );
}

export default Kernel;
