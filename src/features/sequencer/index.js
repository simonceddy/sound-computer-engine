import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SequencerContainer from '../../components/Sequencer/SequencerContainer';
import SequencerStepButton from '../../components/Sequencer/SequencerStepButton';
import { initSequence, toggleStep } from './sequencerSlice';

const emptySeqPage = [];

for (let i = 0; i < 16; i++) {
  emptySeqPage[i] = 0;
}

function Sequencer() {
  const { selectedTrackId } = useSelector((state) => state.project);
  const { loadedSequences, steps, step } = useSelector((state) => state.sequencer);
  const dispatch = useDispatch();
  useEffect(() => {
    let loaded = false;
    if (!loaded && !loadedSequences[selectedTrackId]) {
      dispatch(initSequence(selectedTrackId));
    }

    return () => {
      loaded = true;
    };
  }, [selectedTrackId]);
  const currentSeq = loadedSequences[selectedTrackId];
  // console.log(steps[selectedTrackId]);
  return (
    <SequencerContainer>
      {emptySeqPage.map((_v, idx) => (
        <SequencerStepButton
          onClick={() => {
            dispatch(toggleStep({
              id: selectedTrackId,
              step: idx
            }));
          }}
          currentStep={(steps[selectedTrackId]
            && steps[selectedTrackId] === idx)
          || (!steps[selectedTrackId] && step === idx)}
          toggled={(
            currentSeq
            && currentSeq[idx]
            && currentSeq[idx].active
          )}
          key={`seq-step-button-${idx}`}
        />
      ))}
    </SequencerContainer>
  );
}

export default Sequencer;
