/* eslint-disable no-unused-vars */
import { createListenerMiddleware } from '@reduxjs/toolkit';
import { togglePlay } from '../features/kernel/kernelSlice';

const eventEmitterMiddleware = createListenerMiddleware();

eventEmitterMiddleware.startListening({
  actionCreator: togglePlay,
  effect: async (action, api) => {
    console.log(action.type);
  }
});

export default eventEmitterMiddleware;
