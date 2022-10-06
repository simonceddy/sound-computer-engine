import { createSlice } from '@reduxjs/toolkit';

export const displaySlice = createSlice({
  name: 'display',
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    initDisplay: (state, action) => {
      state.darkMode = action.payload.darkMode;
    }
  },
});

export const { toggleDarkMode, initDisplay } = displaySlice.actions;

export default displaySlice.reducer;
