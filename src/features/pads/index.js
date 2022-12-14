import { useDispatch, useSelector } from 'react-redux';
import PadButton from '../../components/Pads/PadButton';
import PadsContainer from '../../components/Pads/PadsContainer';
import { displayModes, modes, setDisplayMode } from '../kernel/kernelSlice';
import { setSelectedTrack } from '../project/projectSlice';

const padKeys = [];

for (let i = 0; i < 16; i++) {
  padKeys[i] = 0;
}

function Pads() {
  const { selectedTrackId } = useSelector((state) => state.project);
  const { mode, displayMode } = useSelector((state) => state.kernel);
  const dispatch = useDispatch();
  // console.log(mode);
  return (
    <PadsContainer>
      {padKeys.map((_v, idx) => (
        <PadButton
          onClick={(e) => {
            if (mode === modes.EDIT || e.shiftKey) {
              if (selectedTrackId !== idx) {
                dispatch(setSelectedTrack(idx));
              } else if (displayMode !== displayModes.EDIT_TRACK) {
                dispatch(setDisplayMode(displayModes.EDIT_TRACK));
              }
            } else if (mode === modes.PERF) {
              console.log('trigger drum pad');
            }
          }}
          key={`pad-button-${idx}`}
          className={`${selectedTrackId === idx ? 'selected-track' : ''} ${mode === modes.EDIT ? 'pads-edit-mode' : ''} ${mode === modes.PERF ? 'pads-perf-mode' : ''}`}
        >
          {idx + 1}
        </PadButton>
      ))}
    </PadsContainer>
  );
}

export default Pads;
