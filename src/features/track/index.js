import step from '../step';

const track = {
  name: '',
  startAt: 0,
  seqLength: 16,
  clockMult: 1,
  // sequence: []
};

export function makeSeqTrack(opts = {}) {
  const l = opts.seqLength || 16;
  const steps = [];
  for (let i = 0; i < l; i++) {
    steps[i] = { ...step };
  }
  return steps;
}

export default track;
