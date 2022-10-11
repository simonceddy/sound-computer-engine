import { useSelector } from 'react-redux';

function useSelectedTrack() {
  const { tracks, selectedTrackId } = useSelector((state) => state.project);
  return tracks[selectedTrackId] || null;
}

export default useSelectedTrack;
