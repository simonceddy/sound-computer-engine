import { createListenerMiddleware } from '@reduxjs/toolkit';
import { toggleDarkMode } from '../features/display/displaySlice';
import { initTrack, setSelectedTrack } from '../features/project/projectSlice';
import { initSequence } from '../features/sequencer/sequencerSlice';
import { persistMetadata } from '../util/storage';

export const tracksListenerMiddleware = createListenerMiddleware();

tracksListenerMiddleware.startListening({
  actionCreator: setSelectedTrack,
  effect: (action, api) => {
    if (!api.getState().project.tracks[action.payload]) {
      api.dispatch(initTrack(action.payload));
    }
    if (!api.getState().sequencer.loadedSequences[action.payload]) {
      api.dispatch(initSequence(action.payload));
    }
  }
});

export const darkModeListenerMiddleware = createListenerMiddleware();

darkModeListenerMiddleware.startListening({
  actionCreator: toggleDarkMode,
  effect: async (_action, api) => {
    await persistMetadata(api.getState().display);
  }
});
