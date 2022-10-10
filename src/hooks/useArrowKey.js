/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { displayModes } from '../features/kernel/kernelSlice';
import { setSelectedTrack } from '../features/project/projectSlice';

const validDirection = {
  up: true,
  down: true,
  left: true,
  right: true,
};

function keyHandler(mode, dir, dispatch) {
  switch (mode) {
    case displayModes.PROJ:
      return ({ selectedTrackId }) => {
        // console.log(dir);
        if (dir === 'down') {
          dispatch(setSelectedTrack(
            selectedTrackId >= 15 ? 0 : selectedTrackId + 1
          ));
        } else if (dir === 'up') {
          dispatch(setSelectedTrack(
            selectedTrackId <= 0 ? 15 : selectedTrackId - 1
          ));
        }
      };
    case displayModes.EDIT_STEP:
    case displayModes.EDIT_TRACK:
    case displayModes.LOADPROJ:
    case displayModes.MIXER:
      return ({ selectedTrackId }) => {
        if (dir === 'right') {
          dispatch(setSelectedTrack(
            selectedTrackId >= 15 ? 0 : selectedTrackId + 1
          ));
        } else if (dir === 'left') {
          dispatch(setSelectedTrack(
            selectedTrackId <= 0 ? 15 : selectedTrackId - 1
          ));
        }
      };
    default:
      return () => {
        console.log('empty arrow key handler');
      };
  }
}

function useArrowKey(direction) {
  const dir = direction.toLowerCase();

  const { displayMode } = useSelector((state) => state.kernel);
  // const { selectedTrackId } = useSelector((state) => state.project);
  const dispatch = useDispatch();

  if (!validDirection[dir]) {
    return null;
  }

  const handler = keyHandler(displayMode, dir, dispatch);
  return {
    handler
  };
}

export default useArrowKey;
