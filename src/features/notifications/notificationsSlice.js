import { createSlice } from '@reduxjs/toolkit';

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: {
    current: null
  },
  reducers: {
    setNotification: (state, action) => {
      state.current = action.payload;
    },
    clearNotification: (state) => {
      state.current = null;
    }
  },
});

export const {
  setNotification,
  clearNotification
} = notificationsSlice.actions;

export default notificationsSlice.reducer;
