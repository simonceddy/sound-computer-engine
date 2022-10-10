import { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CtrlButton from '../../components/Ctrl/CtrlButton';
import useArrowKey from '../../hooks/useArrowKey';
import { displayModes, setDisplayMode } from '../kernel/kernelSlice';

const UpButton = forwardRef((_props, ref) => {
  const dispatch = useDispatch();
  const { handler } = useArrowKey('up');
  const { selectedTrackId } = useSelector((state) => state.project);

  return (
    <CtrlButton
      ref={ref}
      onKeyDown={(e) => {
        console.log(e.target);
      }}
      label=""
      fnLabel="load"
      key="ctrl-button-up"
      className="bg-slate-400 active:bg-cyan-400"
      onClick={(e) => {
        // console.log(e);
        if (e.shiftKey) {
          dispatch(setDisplayMode(displayModes.LOADPROJ));
        } else {
          handler({ selectedTrackId });
        }
      }}
    >
      ↑
    </CtrlButton>
  );
});

export default UpButton;
