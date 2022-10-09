/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CtrlButton from '../../components/Ctrl/CtrlButton';
import { modes, setMode } from '../kernel/kernelSlice';

const modeToggles = Object.keys(modes);

function getBgCss(toggledMode = 0) {
  switch (toggledMode) {
    case 1:
      return 'bg-orange-400';
    case 2:
      return 'bg-purple-400';
    case 3:
      return 'bg-blue-400';
    case 0:
    default:
      return 'bg-slate-400';
  }
}
const maxMode = modeToggles.length - 1;

function PadModeButton() {
  const { mode } = useSelector((state) => state.kernel);
  const getToggleMode = () => modeToggles.findIndex((v) => v === mode);
  const [toggledMode, setToggledMode] = useState(getToggleMode() || 0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMode(modes[modeToggles[toggledMode]] || modes.EDIT));
  }, [toggledMode]);
  return (
    <CtrlButton
      label="pads"
      fnLabel=""
      className={`active:bg-cyan-400 ${getBgCss(toggledMode)}`}
      onClick={(e) => {
        if (e.shiftKey) {
          setToggledMode(toggledMode <= 0 ? maxMode : toggledMode - 1);
        } else {
          setToggledMode(toggledMode >= maxMode ? 0 : toggledMode + 1);
        }
      }}
    />
  );
}

export default PadModeButton;
