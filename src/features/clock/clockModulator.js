export default function clockModulator(tempo, tracks) {
  const counters = {
    project: ((60 / tempo) * 1000) / 5
  };
  // const counterLimit = ((60 / tempo) * 1000) / 5;
  tracks.forEach(({ clockMult }, idx) => {
    // console.log(clockMult);
    if (clockMult !== 1) {
      counters[idx] = ((60 / (tempo * clockMult)) * 1000) / 5;
    }
  });

  return counters;
}
