import { createSlice } from '@reduxjs/toolkit';
import { preloadProjectId, preloadTracks } from '../../app/preloadState';
import track from '../track';

export const projectSlice = createSlice({
  name: 'project',
  initialState: {
    id: preloadProjectId(),
    tempo: 120,
    tracks: preloadTracks(),
    selectedTrackId: 0
  },
  reducers: {
    setProjectTempo: (state, action) => {
      state.tempo = Number(action.payload);
    },
    setSelectedTrack: (state, action) => {
      state.selectedTrackId = action.payload;
    },
    initTrack: (state, action) => {
      state.tracks[action.payload] = {
        ...track,
        name: `Track ${(action.payload + 1).toLocaleString(
          'en-US',
          {
            minimumIntegerDigits: 2,
            useGrouping: false
          }
        )}`
      };
    }
  },
});

export const {
  setProjectTempo,
  setSelectedTrack,
  initTrack
} = projectSlice.actions;

export default projectSlice.reducer;
