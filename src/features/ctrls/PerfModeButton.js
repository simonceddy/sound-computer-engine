import { useDispatch, useSelector } from 'react-redux';
import CtrlButton from '../../components/Ctrl/CtrlButton';
import { modes, setMode } from '../kernel/kernelSlice';

function PerfModeButton() {
  const { mode } = useSelector((state) => state.kernel);
  const dispatch = useDispatch();
  return (
    <CtrlButton
      label="perf"
      fnLabel="keys"
      className={`active:bg-cyan-400 ${mode === modes.PERF ? 'bg-orange-400' : ''} ${mode === modes.KEYS ? 'bg-purple-400' : ''} ${mode !== modes.KEYS && mode !== modes.PERF ? 'bg-slate-400' : ''}`}
      onClick={(e) => {
        if ((e.shiftKey && mode !== modes.KEYS) || mode === modes.PERF) {
          dispatch(setMode(modes.KEYS));
        } else if (mode !== modes.PERF) dispatch(setMode(modes.PERF));
      }}
    />
  );
}

export default PerfModeButton;
