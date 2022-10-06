import { createSlice } from '@reduxjs/toolkit';
import { preloadSequences } from '../../app/preloadState';
import { makeSeqTrack } from '../track';

export const sequencerSlice = createSlice({
  name: 'sequencer',
  initialState: {
    page: 1,
    ...preloadSequences(),
    step: 0,
  },
  reducers: {
    setSequencerPage: (state, action) => {
      state.page = action.payload;
    },
    initSequence: (state, action) => {
      state.loadedSequences[action.payload] = makeSeqTrack();
    },
    toggleStep: (state, action) => {
      if (state.loadedSequences[action.payload.id]
        && state.loadedSequences[action.payload.id][action.payload.step]
      ) {
        state
          .loadedSequences[action.payload.id][action.payload.step]
          .active = !state
            .loadedSequences[action.payload.id][action.payload.step]
            .active;
      }
    },
    initTrackSteps: (state, action) => {
      state.steps[action.payload] = 0;
    },
    nextStep: (state, action) => {
      // console.log(action.payload, state.steps);
      if (action.payload.id === 'project') {
        state.step = state.step >= 15 ? 0 : state.step + 1;
      } else if (state.steps[action.payload.id] !== undefined) {
        const nextStep = state.steps[action.payload.id] + 1;
        console.log('here');
        state.steps[action.payload.id] = (action.payload.max
          && nextStep >= action.payload.max)
          ? 0
          : nextStep;
      }
    }
  },
});

export const {
  setSequencerPage,
  initSequence,
  toggleStep,
  nextStep,
  initTrackSteps
} = sequencerSlice.actions;

export default sequencerSlice.reducer;
