import { useDispatch } from 'react-redux';
import CtrlButton from '../../components/Ctrl/CtrlButton';
import { displayModes, setDisplayMode } from '../kernel/kernelSlice';

function UpButton() {
  const dispatch = useDispatch();
  return (
    <CtrlButton
      label=""
      fnLabel="load"
      key="ctrl-button-up"
      className="bg-slate-400 active:bg-cyan-400"
      onClick={(e) => {
        // console.log(e);
        if (e.shiftKey) {
          dispatch(setDisplayMode(displayModes.LOADPROJ));
        }
      }}
    >
      ↑
    </CtrlButton>
  );
}

export default UpButton;
