import { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CtrlButton from '../../components/Ctrl/CtrlButton';
import {
  displayModes, modes, setDisplayMode, setMode
} from '../kernel/kernelSlice';

function getButtonBg(mode) {
  switch (mode) {
    case displayModes.EDIT_TRACK:
      return 'bg-orange-400';
    case displayModes.ENGINE:
      return 'bg-purple-400';
    default:
      return 'bg-slate-400';
  }
}

const EditModeButton = forwardRef((_props, ref) => {
  const { displayMode } = useSelector((state) => state.kernel);
  const dispatch = useDispatch();
  return (
    <CtrlButton
      ref={ref}
      label="Edit"
      className={`active:bg-cyan-400 ${getButtonBg(displayMode)}`}
      onClick={(e) => {
        if (e.shiftKey && displayMode !== displayModes.ENGINE) {
          dispatch(setDisplayMode(displayModes.ENGINE));
        } else if (displayMode !== displayModes.EDIT_TRACK) {
          dispatch(setDisplayMode(displayModes.EDIT_TRACK));
          dispatch(setMode(modes.EDIT));
        }
      }}
    />
  );
});

export default EditModeButton;
