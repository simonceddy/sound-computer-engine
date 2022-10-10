import { forwardRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CtrlButton from '../../components/Ctrl/CtrlButton';
import { togglePlay } from '../kernel/kernelSlice';
import icon from '../../resources/play-icon.svg';

const PlayButton = forwardRef((_props, ref) => {
  const { isPlaying } = useSelector((state) => state.kernel);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(togglePlay());
  };
  const PlayComp = useCallback(() => (
    <CtrlButton
      ref={ref}
      className={`active:bg-cyan-400 ${isPlaying ? 'bg-green-400' : 'bg-slate-400'} flex flex-col justify-center items-center`}
      onClick={(e) => {
        if (e.shiftKey) {
          // save project
        } else {
          handleClick();
        }
      }}
    >
      <img src={icon} alt="" width="20px" height="20px" />
    </CtrlButton>
  ), [isPlaying]);
  return (
    <PlayComp />
  );
});

export default PlayButton;
