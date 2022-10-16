import { createSlice } from '@reduxjs/toolkit';

const worker = new Worker('sce/clockWorker.js');
worker.onmessage = (m) => console.log(m.data);

export const modes = {
  EDIT: 0,
  PERF: 1,
  KEYS: 2,
  MIX: 3,
};

export const displayModes = {
  HOME: 0,
  PROJ: 1,
  LOADPROJ: 2,
  EDIT_TRACK: 3,
  MIXER: 4,
  EDIT_STEP: 5,
  MIXER_CHANNEL: 6,
  ENGINE: 7,
  EFFECTS: 8,
  MODULATION: 9,
  ROUTING: 10,
  MASTER_CHANNEL: 11,
};

export const kernelSlice = createSlice({
  name: 'kernel',
  initialState: {
    booted: false,
    mode: modes.EDIT,
    isPlaying: false,
    displayMode: displayModes.PROJ,
    error: null,
  },
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setDisplayMode: (state, action) => {
      state.displayMode = action.payload;
    },
    togglePlay: (state) => {
      const newState = !state.isPlaying;
      // worker.postMessage(newState ? 'start' : 'stop');
      state.isPlaying = newState;
    },
    setBooted: (state) => {
      state.booted = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  setMode,
  togglePlay,
  setDisplayMode,
  setBooted,
  setError,
  clearError
} = kernelSlice.actions;

export default kernelSlice.reducer;
