import { useDispatch, useSelector } from 'react-redux';
import CtrlButton from '../../components/Ctrl/CtrlButton';
import { toggleDarkMode } from '../display/displaySlice';
import { displayModes, setDisplayMode } from '../kernel/kernelSlice';
// import useProject from '../project/useProject';

function MixerButton() {
  const { displayMode } = useSelector((state) => state.kernel);
  const dispatch = useDispatch();
  return (
    <CtrlButton
      fnLabel="dark"
      className={`active:bg-cyan-400 ${displayMode === displayModes.MIXER ? 'bg-orange-400' : 'bg-slate-400'}`}
      onClick={(e) => {
        if (e.shiftKey) {
          dispatch(toggleDarkMode());
        } else {
          dispatch(setDisplayMode(displayModes.MIXER));
        }
      }}
      label="mixer"
    />
  );
}

export default MixerButton;
