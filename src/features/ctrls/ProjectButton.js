import localforage from 'localforage';
import { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CtrlButton from '../../components/Ctrl/CtrlButton';
import { persist, SCE_LAST_PROJECT_PREFIX } from '../../util/storage';
import { displayModes, setDisplayMode } from '../kernel/kernelSlice';
import { setNotification } from '../notifications/notificationsSlice';
// import useProject from '../project/useProject';

const ProjectButton = forwardRef((_props, ref) => {
  const { displayMode } = useSelector((state) => state.kernel);
  const { project, sequencer } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <CtrlButton
      ref={ref}
      fnLabel="save"
      className={`active:bg-cyan-400 ${displayMode === displayModes.PROJ ? 'bg-orange-400' : 'bg-slate-400'}`}
      onClick={async (e) => {
        if (e.shiftKey) {
          // save project
          const saved = await persist({ project, sequencer });
          console.log(saved);
          await localforage.setItem(
            SCE_LAST_PROJECT_PREFIX,
            project.id
          );
          dispatch(setNotification('Project saved'));
        } else {
          dispatch(setDisplayMode(displayModes.PROJ));
        }
      }}
      label="Proj"
    />
  );
});

export default ProjectButton;
