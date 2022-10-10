import { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import CtrlButton from '../../components/Ctrl/CtrlButton';
import useArrowKey from '../../hooks/useArrowKey';

const DownButton = forwardRef((_props, ref) => {
  const { handler } = useArrowKey('down');
  const { selectedTrackId } = useSelector((state) => state.project);
  return (
    <CtrlButton
      ref={ref}
      label=""
      fnLabel=""
      key="ctrl-button-up"
      className="bg-slate-400 active:bg-cyan-400"
      onClick={() => {
        handler({ selectedTrackId });
      }}
    >
      ↓
    </CtrlButton>
  );
});

export default DownButton;
