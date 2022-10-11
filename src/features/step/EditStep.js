/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import DisplayRow from '../../components/Display/DisplayRow';

function EditStep({ children }) {
  const { loadedSequences, selectedParam } = useSelector((state) => state.sequencer);
  const { selectedStep } = useSelector((state) => state.editStep);
  const { tracks, selectedTrackId } = useSelector((state) => state.project);
  const { darkMode } = useSelector((state) => state.display);
  // console.log(loadedSequences[selectedTrackId][selectedStep], tracks[selectedTrackId]);
  return (
    <div>
      <DisplayRow darkMode={darkMode}>
        {tracks[selectedTrackId].name} - Step {selectedStep + 1}
      </DisplayRow>
      <DisplayRow selected={selectedParam === 'active'} darkMode={darkMode}>
        Active: {loadedSequences[selectedTrackId][selectedStep].active
        ? 'true'
        : 'false'}
      </DisplayRow>
      <DisplayRow darkMode={darkMode} selected={selectedParam === 'prob'}>
        Probability: {loadedSequences[selectedTrackId][selectedStep].prob}
      </DisplayRow>
    </div>
  );
}

export default EditStep;
