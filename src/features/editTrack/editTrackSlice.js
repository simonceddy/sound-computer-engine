import { createSlice } from '@reduxjs/toolkit';

export const editTrackParams = [
  'name',
  'clockMult',
  'engine'
];

export const editTrackSlice = createSlice({
  name: 'editTrack',
  initialState: {
    selectedParam: editTrackParams[0]
  },
  reducers: {
    setSelectedParam: (state, action) => {
      state.selectedParam = action.payload;
    }
  },
});

export const { setSelectedParam } = editTrackSlice.actions;

export default editTrackSlice.reducer;
