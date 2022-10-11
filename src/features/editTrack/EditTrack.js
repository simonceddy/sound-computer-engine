import { useDispatch, useSelector } from 'react-redux';
import DisplayRow from '../../components/Display/DisplayRow';
import SelectTrackEngine from '../../components/SelectTrackEngine';
import { useSelectedTrack } from '../../hooks';
import { engines } from '../engines';
import { displayModes, setDisplayMode } from '../kernel/kernelSlice';
import { updateTrack } from '../project/projectSlice';
import { setSelectedParam } from './editTrackSlice';

const engineKeys = Object.keys(engines);

function EditTrack() {
  const { selectedParam } = useSelector((state) => state.editTrack);
  const { selectedTrackId } = useSelector((state) => state.project);
  const track = useSelectedTrack();
  const { darkMode } = useSelector((state) => state.display);
  const dispatch = useDispatch();
  console.log(track);
  return (
    <div>
      <DisplayRow
        selected={selectedParam === 'name'}
        darkMode={darkMode}
        onClick={() => {
          if (selectedParam !== 'name') dispatch(setSelectedParam('name'));
        }}
      >
        {track.name}
      </DisplayRow>
      <DisplayRow
        selected={selectedParam === 'clockMult'}
        darkMode={darkMode}
        onClick={() => {
          if (selectedParam !== 'clockMult') dispatch(setSelectedParam('clockMult'));
        }}
      >
        Clock multiplier: {track.clockMult || 1}
      </DisplayRow>
      <DisplayRow
        selected={selectedParam === 'engine'}
        darkMode={darkMode}
        onDoubleClick={() => {
          dispatch(setDisplayMode(displayModes.ENGINE));
        }}
        onClick={() => {
          if (selectedParam !== 'engine') dispatch(setSelectedParam('engine'));
        }}
      >
        Engine: {selectedParam === 'engine' ? (
          <SelectTrackEngine
            value={track.engine || 0}
            onChange={(e) => {
              const newEngine = Number(e.target.value);
              dispatch(updateTrack({
                id: selectedTrackId,
                data: {
                  engine: newEngine
                }
              }));
            }}
          />
      ) : engineKeys[track.engine || 0]}
      </DisplayRow>
      {}
    </div>
  );
}

export default EditTrack;
