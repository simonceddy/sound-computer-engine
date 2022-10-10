import { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import CtrlButton from '../../components/Ctrl/CtrlButton';
import useArrowKey from '../../hooks/useArrowKey';

const LeftButton = forwardRef((_props, ref) => {
  // const dispatch = useDispatch();
  const { handler } = useArrowKey('left');
  const { selectedTrackId } = useSelector((state) => state.project);
  return (
    <CtrlButton
      ref={ref}
      onKeyDown={(e) => {
        console.log(e.target);
      }}
      label=""
      fnLabel=""
      key="ctrl-button-up"
      className="bg-slate-400 active:bg-cyan-400"
      onClick={() => {
        handler({ selectedTrackId });
      }}
    >
      ←
    </CtrlButton>
  );
});

export default LeftButton;
