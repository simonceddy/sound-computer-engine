import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DisplayContainer from '../../components/Display/DisplayContainer';
import './Display.css';
import { displayModes, modes } from '../kernel/kernelSlice';
import TrackDisplayRow from '../../components/Display/TrackDisplayRow';
import LoadProject from '../loadProject';
import { setSelectedTrack } from '../project/projectSlice';
import EditTrack from '../editTrack/EditTrack';

function Display() {
  const ref = useRef(null);
  const { darkMode } = useSelector((state) => state.display);
  const { mode, displayMode, booted } = useSelector((state) => state.kernel);
  const {
    tempo, selectedTrackId, tracks, id
  } = useSelector((state) => state.project);
  const { loadedSequences } = useSelector((state) => state.sequencer);
  // console.log(tracks);
  const dispatch = useDispatch();
  return (
    <DisplayContainer>
      {booted ? (

        <div ref={ref} className={`display-screen text-xs ${darkMode ? 'dark-mode' : ''}`}>
          <div className={`flex flex-row w-full border-b justify-start items-start ${darkMode ? 'border-orange-300' : 'border-black'}`}>
            <div className={`border-r px-0.5 ${darkMode ? 'border-orange-300' : 'border-black'}`}>
              {tempo} BPM
            </div>
            <div className={`border-r px-0.5 ${darkMode ? 'border-orange-300' : 'border-black'}`}>
              {mode === modes.EDIT && 'Edit Mode'}
              {mode === modes.PERF && 'Perf Mode'}
              {mode === modes.KEYS && 'Keys Mode'}
            </div>
            <div className={`border-r px-0.5 ${darkMode ? 'border-orange-300' : 'border-black'}`}>
              Track {(selectedTrackId + 1).toLocaleString(
              'en-US',
              {
                minimumIntegerDigits: 2,
                useGrouping: false
              }
            )}
            </div>
          </div>
          <div className="flex-1 w-full overflow-y-scroll whitespace-nowrap p-0.5">
            {displayMode === displayModes.PROJ && (
            <div className="flex flex-col justify-start items-start">
              <div className="text-lg" style={{ marginBottom: '2px' }}>
                {id}
              </div>
              {tracks.map((track, idx) => (
                <TrackDisplayRow
                  selected={idx === selectedTrackId}
                  onClick={() => {
                    if (idx !== selectedTrackId) {
                      dispatch(setSelectedTrack(idx));
                    }
                  }}
                  darkMode={darkMode}
                  key={`track-${idx}-info`}
                  index={idx}
                  track={track}
                  sequence={loadedSequences[idx] || null}
                />
              ))}
            </div>
            )}
            {displayMode === displayModes.LOADPROJ && (
            <LoadProject />
            )}
            {displayMode === displayModes.EDIT_TRACK && (
              <EditTrack />
            )}
          </div>
          {}
        </div>
      ) : (
        <div className="display-loading-screen flex flex-col justify-center items-center">
          <div className="flex flex-col justify-start items-start font-bold">
            <span>Sound</span>
            <span>Computer</span>
            <span>Environment</span>
          </div>
        </div>
      )}
    </DisplayContainer>
  );
}

export default Display;
