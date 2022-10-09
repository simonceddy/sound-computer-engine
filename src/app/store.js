import { configureStore } from '@reduxjs/toolkit';
import project from '../features/project/projectSlice';
import kernel from '../features/kernel/kernelSlice';
import display from '../features/display/displaySlice';
import sequencer from '../features/sequencer/sequencerSlice';
import clock from '../features/clock/clockSlice';
import {
  darkModeListenerMiddleware,
  // eventEmitterMiddleware,
  loadProjectListenerMiddleware,
  tracksListenerMiddleware
} from '../middleware';
import loadProject from '../features/loadProject/loadProjectSlice';
import notifications from '../features/notifications/notificationsSlice';

const store = configureStore({
  reducer: {
    project,
    kernel,
    display,
    sequencer,
    clock,
    loadProject,
    notifications,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .prepend(
      tracksListenerMiddleware.middleware,
      darkModeListenerMiddleware.middleware,
      loadProjectListenerMiddleware.middleware,
      // eventEmitterMiddleware.middleware,
    ),
});

export default store;
