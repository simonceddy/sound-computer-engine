import { useDispatch, useSelector } from 'react-redux';
import MixerChannel from '../../components/Mixer/MixerChannel';
import { displayModes, setDisplayMode } from '../kernel/kernelSlice';
import { setSelectedTrack } from '../project/projectSlice';

function Mixer() {
  const { tracks, selectedTrackId } = useSelector((state) => state.project);
  const { darkMode } = useSelector((state) => state.display);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row overflow-x-scroll w-full justify-start items-start flex-1 h-full">
      {tracks.map((track, idx) => (
        <MixerChannel
          onClick={() => {
            dispatch(setSelectedTrack(idx));
          }}
          key={`mixer-channel-${idx}`}
          darkMode={darkMode}
          selected={selectedTrackId === idx}
          onDoubleClick={() => {
            dispatch(setDisplayMode(displayModes.MIXER_CHANNEL));
          }}
        >
          {idx + 1}
        </MixerChannel>
      ))}
      <div
        role="presentation"
        onDoubleClick={() => {
          dispatch(setDisplayMode(displayModes.MASTER_CHANNEL));
        }}
        id="mixer-channel-master"
        className={`flex flex-col justify-between items-center h-full mixer-channel border ${darkMode ? 'border-orange-400' : 'border-black'}`}
      >
        <div className="text-xs">
          M
        </div>
        {}
      </div>
    </div>
  );
}

export default Mixer;
