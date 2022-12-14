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
        // console.log('here');
        state.steps[action.payload.id] = (action.payload.max
          && nextStep >= (action.payload.max - 1))
          ? 0
          : nextStep;
      }
    },
    resetSteps: (state) => {
      state.step = 0;
      state.steps = state.steps.map(() => 0);
    },
    loadSequences: (state, action) => {
      state.loadedSequences = action.payload;
    },
    initSequencer: (state, action) => {
      state.loadedSequences = action.payload.loadedSequences || state.loadedSequences;
      state.page = action.payload.page || state.page;
      state.step = action.payload.step || state.step;
      state.steps = action.payload.steps || state.steps;
    }
  },
});

export const {
  setSequencerPage,
  initSequence,
  toggleStep,
  nextStep,
  initTrackSteps,
  resetSteps,
  loadSequences,
  initSequencer
} = sequencerSlice.actions;

export default sequencerSlice.reducer;
