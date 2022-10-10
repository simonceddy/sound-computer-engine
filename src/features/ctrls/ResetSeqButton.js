import { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import CtrlButton from '../../components/Ctrl/CtrlButton';
import icon from '../../resources/reset-icon.svg';
import { resetSteps } from '../sequencer/sequencerSlice';

const ResetSeqButton = forwardRef((_props, ref) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(resetSteps());
  };
  return (
    <CtrlButton
      ref={ref}
      className="active:bg-cyan-400 bg-slate-400 flex flex-col justify-center items-center"
      onClick={() => {
        handleClick();
      }}
    >
      <img src={icon} alt="" width="20px" height="20px" />
    </CtrlButton>
  );
});

export default ResetSeqButton;
