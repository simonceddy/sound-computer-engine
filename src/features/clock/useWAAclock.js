import WAAClock from 'waaclock';

function useWAAclock(context) {
  const clock = new WAAClock(context, { toleranceEarly: 0.1 });
  const soundBank = {};
  const beats = {};
  const tempo = QUERY.tempo || 120;
  const signature = QUERY.signature || 4;
  const beatDur = 60 / tempo;
  const barDur = signature * beatDur;

  // ---------- Just some helpers ---------- //
  // This helper calculates the absolute time of the upcoming `beatInd`.
  const nextBeatTime = (beatInd) => {
    const { currentTime } = context;
    const currentBar = Math.floor(currentTime / barDur);
    const currentBeat = Math.round(currentTime % barDur);
    if (currentBeat < beatInd) return currentBar * barDur + beatInd * beatDur;
    return (currentBar + 1) * barDur + beatInd * beatDur;
  };

  // This function activates the beat `beatInd` of `track`.
  const startBeat = (track, beatInd) => {
    const event = clock.callbackAtTime((ev) => {
      const bufferNode = soundBank[track].createNode();
      bufferNode.start(ev.deadline);
    }, nextBeatTime(beatInd));
    event.repeat(barDur);
    event.tolerance({ late: 0.01 });
    beats[track][beatInd] = event;
  };

  // This function deactivates the beat `beatInd` of `track`.
  const stopBeat = (track, beatInd) => {
    const event = beats[track][beatInd];
    event.clear();
  };
}

export default useWAAclock;
