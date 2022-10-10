import { useDispatch, useSelector } from 'react-redux';
import { displayModes, setDisplayMode } from '../features/kernel/kernelSlice';

function useSelectButton() {
  const { displayMode } = useSelector((state) => state.kernel);
  const dispatch = useDispatch();
  const handler = () => {
    switch (displayMode) {
      case displayModes.PROJ:
        return () => dispatch(setDisplayMode(displayModes.EDIT_TRACK));
      case displayModes.MIXER:
        return () => dispatch(setDisplayMode(displayModes.MIXER_CHANNEL));
      default:
        return null;
    }
  };
  return handler();
}

export default useSelectButton;
