import { useState } from 'react';
import { useSelector } from 'react-redux';
import DisplayRow from '../../components/Display/DisplayRow';

function EditTrack() {
  const [editingParam, setEditingParam] = useState('name');
  const { tracks, selectedTrackId } = useSelector((state) => state.project);
  const { darkMode } = useSelector((state) => state.display);

  console.log(tracks[selectedTrackId]);
  return (
    <div>
      <DisplayRow
        selected={editingParam === 'name'}
        darkMode={darkMode}
        onClick={() => {
          if (editingParam !== 'name') setEditingParam('name');
        }}
      >
        {tracks[selectedTrackId].name}
      </DisplayRow>
      <DisplayRow
        selected={editingParam === 'clockMult'}
        darkMode={darkMode}
        onClick={() => {
          if (editingParam !== 'clockMult') setEditingParam('clockMult');
        }}
      >
        Clock multiplier: {tracks[selectedTrackId].clockMult || 1}
      </DisplayRow>
      {}
    </div>
  );
}

export default EditTrack;
