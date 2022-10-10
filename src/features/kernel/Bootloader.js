/* eslint-disable no-unused-vars */
import localforage from 'localforage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { load, loadMetadata, SCE_LAST_PROJECT_PREFIX } from '../../util/storage';
import { initDisplay } from '../display/displaySlice';
import { setNotification } from '../notifications/notificationsSlice';
import { loadProject } from '../project/projectSlice';
import { initSequencer } from '../sequencer/sequencerSlice';
import { displayModes, setBooted, setDisplayMode } from './kernelSlice';

// console.log(jzz.MIDI.clock().getTempo());
function getDarkMode() {
  return loadMetadata()
    .catch(console.error);
}

function Bootloader({ children }) {
  const dispatch = useDispatch();
  const { booted } = useSelector((state) => state.kernel);
  // const getStep = useStep();
  /* (key) => {
    if (key === 'project') {
      loadedSequences
        .filter((_seq, idx) => clocks.mods[idx] === undefined)
        .forEach((_seq, idx) => onTick(idx));
    } else if (clocks.mods[key]) {
      onTick(key);
    }
  } ) */
  // useMidiClock(audioContext);

  useEffect(() => {
    let init = false;
    if (!init && !booted) {
      getDarkMode()
        .then((data) => {
          if (data) dispatch(initDisplay(data));
        })
        .then(() => {
          setTimeout(() => {
            dispatch(setBooted());
          }, 1000);
        });
      localforage.getItem(SCE_LAST_PROJECT_PREFIX)
        .then((id) => {
          if (id) {
            load(id)
              .then(({ project, sequencer }) => {
                dispatch(loadProject(project));
                dispatch(initSequencer(sequencer));
                dispatch(setDisplayMode(displayModes.PROJ));
                dispatch(setNotification('Project loaded'));
              })
              .catch(console.error);
          }
        });
    }
    return () => {
      init = true;
    };
  }, []);

  return (
    <div className="w-full h-full">
      {children}
    </div>
  );
}

export default Bootloader;
