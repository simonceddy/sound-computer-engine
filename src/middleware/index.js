import { createListenerMiddleware } from '@reduxjs/toolkit';
import localforage from 'localforage';
import { toggleDarkMode } from '../features/display/displaySlice';
import { initTrack, loadProject, setSelectedTrack } from '../features/project/projectSlice';
import { initSequence } from '../features/sequencer/sequencerSlice';
import { persistMetadata, SCE_LAST_PROJECT_PREFIX } from '../util/storage';

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

const setLastProject = async (_action, api) => {
  await localforage.setItem(
    SCE_LAST_PROJECT_PREFIX,
    api.getState().project.id
  );
};

export const loadProjectListenerMiddleware = createListenerMiddleware();

loadProjectListenerMiddleware.startListening({
  actionCreator: loadProject,
  effect: setLastProject
});
