import { useDispatch, useSelector } from 'react-redux';
import CtrlButton from '../../components/Ctrl/CtrlButton';
import {
  displayModes, modes, setDisplayMode, setMode
} from '../kernel/kernelSlice';

function EditModeButton() {
  const { displayMode } = useSelector((state) => state.kernel);
  const dispatch = useDispatch();
  return (
    <CtrlButton
      label="Edit"
      className={`active:bg-cyan-400 ${displayMode === displayModes.EDIT_TRACK ? 'bg-orange-400' : 'bg-slate-400'}`}
      onClick={() => {
        if (displayMode !== displayModes.EDIT_TRACK) {
          dispatch(setDisplayMode(displayModes.EDIT_TRACK));
          dispatch(setMode(modes.EDIT));
        }
      }}
    />
  );
}

export default EditModeButton;
