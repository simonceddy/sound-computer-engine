import { useSelector } from 'react-redux';
import './Mixer.css';

function Mixer() {
  const { tracks, selectedTrackId } = useSelector((state) => state.project);
  const { darkMode } = useSelector((state) => state.display);

  return (
    <div className="flex flex-row overflow-x-scroll w-full justify-start items-start flex-1 h-full">
      {tracks.map((track, idx) => {
        console.log(track);
        return (
          <div
            role="presentation"
            onClick={() => {}}
            key={`mixer-channel-${idx}`}
            className={`flex flex-col justify-between items-center h-full mixer-channel border ${darkMode ? 'border-orange-400' : 'bg-black'} ${selectedTrackId === idx ? 'bg-blue-900 text-orange-400' : ''}`}
          >
            {idx + 1}
          </div>
        );
      })}
      <div
        role="presentation"
        onClick={() => {}}
        id="mixer-channel-master"
        className={`flex flex-col justify-between items-center h-full mixer-channel border ${darkMode ? 'border-orange-400' : 'bg-black'}`}
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
