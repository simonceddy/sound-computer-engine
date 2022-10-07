/* eslint-disable no-unused-vars */
import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import midiClock from '../lib/midi-clock';
import tick from '../lib/midi-clock/tick';
import { initTrackSteps, nextStep } from '../features/sequencer/sequencerSlice';
import clockModulator from '../features/clock/clockModulator';

// console.log(midiClock);

export default function useMidiClock(audioContext) {
  const { tempo, tracks } = useSelector((state) => state.project);
  const { isPlaying } = useSelector((state) => state.kernel);
  const ctx = audioContext || new AudioContext();

  const ticker = tick(ctx);

  const clock = midiClock(ctx, ticker);
  const { steps } = useSelector((state) => state.sequencer);
  const dispatch = useDispatch();
  const [clocks, clockKeys,] = useMemo(() => {
    const cmods = clockModulator(tempo, tracks);
    const k = Object.keys(cmods);

    // const counts = Object.fromEntries(
    //   k.map((key) => [key, 0])
    // );
    return [cmods, k,];
  }, [tracks, tempo]);
  useEffect(() => {
    if (clockKeys.length > 1) {
      clockKeys.forEach((key) => {
        if (key !== 'project' && !steps[key]) {
          dispatch(initTrackSteps(key));
        }
      });
    }
  }, [clockKeys]);
  // clock.setTempo(tempo);
  // console.log(clock);
  let ts = Date.now();
  const handler = (position) => {
    clockKeys.forEach((clk) => {
      const microPosition = position % 24;
      if (microPosition === 0) {
        dispatch(nextStep(clk));
        console.log(Date.now() - ts);
        ts = Date.now();
        // console.log('Beat:', position / 24);
      }
    });
  };
  clock.on('tempo', () => console.log(`set tempo to ${tempo}`));
  clock.on('start', () => {
    clock.on('position', handler);
  });
  clock.on('stop', () => {
    console.log('stopped');
    clock.removeListener('position', handler);
  });

  useEffect(() => {
    console.log('toggle play');
    if (isPlaying) {
      clock.start();
    } else clock.stop();
  }, [isPlaying]);

  useEffect(() => {
    clock.setTempo(tempo);
  }, [tempo]);

  return clock;
}
