import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SequencerContainer from '../../components/Sequencer/SequencerContainer';
import SequencerStepButton from '../../components/Sequencer/SequencerStepButton';
import { displayModes, setDisplayMode } from '../kernel/kernelSlice';
import { setSelectedStep } from '../step/editStepSlice';
import { initSequence, toggleStep } from './sequencerSlice';

const emptySeqPage = [];

for (let i = 0; i < 16; i++) {
  emptySeqPage[i] = 0;
}

function Sequencer() {
  const { selectedTrackId } = useSelector((state) => state.project);
  const { loadedSequences, steps, step } = useSelector((state) => state.sequencer);
  const { displayMode } = useSelector((state) => state.kernel);
  const { selectedStep } = useSelector((state) => state.editStep);
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
          onClick={(e) => {
            if (e.shiftKey) {
              console.log('shift track');
              dispatch(setSelectedStep(idx));
              dispatch(setDisplayMode(displayModes.EDIT_STEP));
            } else {
              dispatch(toggleStep({
                id: selectedTrackId,
                step: idx
              }));
            }
          }}
          selectedStep={(displayMode === displayModes.EDIT_STEP && selectedStep === idx)}
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
