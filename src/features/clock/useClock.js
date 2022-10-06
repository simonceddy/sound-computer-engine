import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initTrackSteps } from '../sequencer/sequencerSlice';
import clockModulator from './clockModulator';

export default function useClock(onToggle, onTick) {
  const [intervalId, setIntervalId] = useState(0);
  const { tempo, tracks } = useSelector((state) => state.project);
  const { steps } = useSelector((state) => state.sequencer);
  const dispatch = useDispatch();
  const clocks = useMemo(() => clockModulator(tempo, tracks), [tracks, tempo]);
  const clockKeys = Object.keys(clocks);
  useEffect(() => {
    if (clockKeys.length > 1) {
      clockKeys.forEach((key) => {
        if (key !== 'project' && !steps[key]) {
          dispatch(initTrackSteps(key));
        }
      });
    }
  }, [clockKeys]);
  const counters = Object.fromEntries(clockKeys.map((key) => [key, 0]));
  const handleClick = () => {
    if (intervalId !== 0) {
      clearInterval(intervalId);
      setIntervalId(0);
    } else {
      clockKeys.forEach((key) => {
        if (counters[key] >= clocks[key]) {
          counters[key] = 0;
          // console.log('tick', key);
          if (onTick) onTick(key, tracks[key] ? tracks[key].seqLength : 16);
        } else {
          counters[key]++;
        }
      });
      const interval = setInterval(() => {
        // console.log('tick');
        clockKeys.forEach((key) => {
          if (counters[key] >= clocks[key]) {
            counters[key] = 0;
            // console.log('tick', key);
            if (onTick) onTick(key, tracks[key] ? tracks[key].seqLength : 16);
          } else {
            counters[key]++;
          }
        });
      }, 5);
      setIntervalId(interval);
    }
    if (onToggle) onToggle();
  };

  return {
    handleClick
  };
}
