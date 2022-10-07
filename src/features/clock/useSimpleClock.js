import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initTrackSteps, nextStep } from '../sequencer/sequencerSlice';
import clockModulator from './clockModulator';

/* eslint-disable no-unused-vars */
export default function useSimpleClock(onTick) {
  const { tempo, tracks } = useSelector((state) => state.project);
  const { isPlaying } = useSelector((state) => state.kernel);
  const { steps, loadedSequences } = useSelector((state) => state.sequencer);
  const [intervalID, setIntervalID] = useState(null);
  const [counters, setCounters] = useState({});
  const [clocks, setClock] = useState({
    mods: {},
    clockKeys: [],
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const mods = (clockModulator(tempo, tracks));
    const clockKeys = Object.keys(mods);
    setClock({
      mods,
      clockKeys
    });

    setCounters(Object.fromEntries(
      clockKeys.map((key) => [key, 0])
    ));
    if (clockKeys.length > 1) {
      clockKeys.forEach((key) => {
        if (key !== 'project' && !steps[key]) {
          dispatch(initTrackSteps(key));
        }
      });
    }
  }, [tempo, tracks]);

  const runClock = useCallback(() => {
    clocks.clockKeys.forEach((key) => {
      if (counters[key] >= clocks.mods[key]) {
        counters[key] = 0;
        dispatch(nextStep({
          id: key,
          max: key === 'project' ? 16 : (tracks[key].seqLength || 16)
        }));
        // console.log('tick', key);
        if (onTick) {
          onTick(key);
        }
      } else {
        counters[key]++;
      }
    });
  }, [clocks, loadedSequences]);

  useEffect(() => {
    if (isPlaying) {
      runClock();
      const interval = setInterval(() => {
        // console.log('tick');
        runClock();
      }, 5);
      setIntervalID(interval);
      console.log('running', intervalID);
    } else {
      clearInterval(intervalID);
      setIntervalID(null);
      console.log('stopped', intervalID);
    }
  }, [isPlaying]);
  // const lookahead = 25.0; // How frequently to call scheduling function (in milliseconds)
  // const scheduleAheadTime = 0.1; // How far ahead to schedule audio (sec)
  // let currentNote = 0;
  // let nextNoteTime = 0.0; // when the next note is due.

  // function nextNote() {
  //   clock.clockKeys.forEach((key) => {});
  //   const secondsPerBeat = 60.0 / (tempo);

  //   nextNoteTime += secondsPerBeat; // Add beat length to last beat time

  //   // Advance the beat number, wrap to zero when reaching 4
  //   currentNote = (currentNote + 1) % 4;
  // }
  // const notesInQueue = [];

  // function scheduleNote(beatNumber, time) {
  //   // Push the note on the queue, even if we're not playing.
  //   notesInQueue.push({ note: beatNumber, time });

  //   // if (pads[0].querySelectorAll('input')[beatNumber].checked) {
  //   //   playSweep(time);
  //   // }
  //   // if (pads[1].querySelectorAll('input')[beatNumber].checked) {
  //   //   playPulse(time);
  //   // }
  //   // if (pads[2].querySelectorAll('input')[beatNumber].checked) {
  //   //   playNoise(time);
  //   // }
  //   // if (pads[3].querySelectorAll('input')[beatNumber].checked) {
  //   //   playSample(audioCtx, dtmf, time);
  //   // }
  // }

  // let timerID;
  // function scheduler() {
  // // While there are notes that will need to play before the next interval,
  // // schedule them and advance the pointer.
  //   while (nextNoteTime < audioCtx.currentTime + scheduleAheadTime) {
  //     scheduleNote(currentNote, nextNoteTime);
  //     nextNote();
  //   }
  //   timerID = setTimeout(scheduler, lookahead);
  // }
}
