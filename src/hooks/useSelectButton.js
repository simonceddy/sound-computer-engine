/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedParam as setTrackParam } from '../features/editTrack/editTrackSlice';
import { displayModes, setDisplayMode } from '../features/kernel/kernelSlice';

function getActionForTrackParam(param) {
  console.log('here', param);
  switch (param) {
    case 'engine':
      return () => setDisplayMode(displayModes.ENGINE);
    case 'clockMult':
    case 'name':
    default:
  }
  return null;
}

function useSelectButton() {
  const { displayMode } = useSelector((state) => state.kernel);
  const { selectedParam: trackParam } = useSelector((state) => state.editTrack);
  const dispatch = useDispatch();
  const handler = () => {
    switch (displayMode) {
      case displayModes.PROJ:
        return () => dispatch(setDisplayMode(displayModes.EDIT_TRACK));
      case displayModes.MIXER:
        return () => dispatch(setDisplayMode(displayModes.MIXER_CHANNEL));
      case displayModes.EDIT_TRACK:
        return () => dispatch(getActionForTrackParam(trackParam)());
      case displayModes.ENGINE:
      case displayModes.EDIT_STEP:
      case displayModes.LOADPROJ:
      case displayModes.MIXER_CHANNEL:
      default:
        return () => null;
    }
  };
  return handler();
}

export default useSelectButton;
