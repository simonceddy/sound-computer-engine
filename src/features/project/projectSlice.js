import { createSlice } from '@reduxjs/toolkit';
import { preloadProjectId, preloadTracks } from '../../app/preloadState';
import track from '../track';

export const projectSlice = createSlice({
  name: 'project',
  initialState: {
    id: preloadProjectId(),
    tempo: 120,
    tracks: preloadTracks(),
    selectedTrackId: 0,
    initialProject: null
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
    },
    setTracks: (state, action) => {
      state.tracks = action.payload;
    },
    setProjectId: (state, action) => {
      state.selectedTrackId = action.payload;
    },
    loadProject: (state, action) => {
      if (action.payload.id) {
        state.id = action.payload.id;
        state.selectedTrackId = action.payload.selectedTrackId || state.selectedTrackId;
        state.tempo = action.payload.tempo || state.tempo;
        state.tracks = action.payload.tracks || state.tracks;
      }
    },
    updateTrack: (state, action) => {
      if (state.tracks[action.payload.id] && action.payload.data) {
        state.tracks[action.payload.id] = {
          ...state.tracks[action.payload.id],
          ...action.payload.data
        };
      }
    }
  },
});

export const {
  setProjectTempo,
  setSelectedTrack,
  initTrack,
  setProjectId,
  setTracks,
  loadProject,
  updateTrack
} = projectSlice.actions;

export default projectSlice.reducer;
