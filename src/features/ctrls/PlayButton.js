import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CtrlButton from '../../components/Ctrl/CtrlButton';
import { togglePlay } from '../kernel/kernelSlice';

function PlayButton() {
  const { isPlaying } = useSelector((state) => state.kernel);
  const dispatch = useDispatch();
  // console.log(clock);
  const handleClick = () => {
    dispatch(togglePlay());
  };
  const PlayComp = useCallback(() => (
    <CtrlButton
      className={`active:bg-cyan-400 ${isPlaying ? 'bg-green-400' : 'bg-slate-400'}`}
      onClick={(e) => {
        if (e.shiftKey) {
          // save project
        } else {
          handleClick();
        }
      }}
    >
      ᐅ
    </CtrlButton>
  ), [isPlaying]);
  return (
    <PlayComp />
  );
}

export default PlayButton;
