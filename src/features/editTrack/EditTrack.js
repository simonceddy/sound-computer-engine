import { useSelector } from 'react-redux';

function EditTrack({ children }) {
  const { tracks, selectedTrackId } = useSelector((state) => state.project);
  console.log(tracks[selectedTrackId]);
  return (
    <div>
      <div className="text-lg" style={{ marginBottom: '2px' }}>
        {tracks[selectedTrackId].name}
      </div>
      {children}
    </div>
  );
}

export default EditTrack;
