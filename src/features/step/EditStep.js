/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';

function EditStep({ children }) {
  const { loadedSequences } = useSelector((state) => state.sequencer);
  const { selectedStep } = useSelector((state) => state.editStep);
  const { tracks, selectedTrackId } = useSelector((state) => state.project);
  console.log(loadedSequences[selectedTrackId][selectedStep], tracks[selectedTrackId]);
  return (
    <div>
      <div>
        {tracks[selectedTrackId].name} - Step {selectedStep}
      </div>
      <div>
        Active: {loadedSequences[selectedTrackId][selectedStep].active
        ? 'true'
        : 'false'}
      </div>
      <div>
        Chance: {loadedSequences[selectedTrackId][selectedStep].prob}
      </div>
    </div>
  );
}

export default EditStep;
