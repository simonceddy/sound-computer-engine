import { useDispatch, useSelector } from 'react-redux';
import CtrlButton from '../../components/Ctrl/CtrlButton';
import { persist } from '../../util/storage';
import { displayModes, setDisplayMode } from '../kernel/kernelSlice';
import useProject from '../project/useProject';

function ProjectButton() {
  const { displayMode } = useSelector((state) => state.kernel);
  const dispatch = useDispatch();
  const project = useProject();

  return (
    <CtrlButton
      fnLabel="save"
      className={`active:bg-cyan-400 ${displayMode === displayModes.PROJ ? 'bg-orange-400' : 'bg-slate-400'}`}
      onClick={(e) => {
        if (e.shiftKey) {
          // save project
          persist(project);
        } else {
          dispatch(setDisplayMode(displayModes.PROJ));
        }
      }}
      label="Proj"
    />
  );
}

export default ProjectButton;
