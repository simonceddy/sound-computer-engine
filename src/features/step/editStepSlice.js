import { createSlice } from '@reduxjs/toolkit';

export const editStepSlice = createSlice({
  name: 'editStepSlice',
  initialState: {
    selectedStep: 0,
    selectedParam: 'active'
  },
  reducers: {
    setSelectedStep: (state, action) => {
      state.selectedStep = action.payload;
    },
    setSelectedParam: (state, action) => {
      state.selectedParam = action.payload;
    }
  },
});

export const {
  setSelectedStep,
  setSelectedParam
} = editStepSlice.actions;

export default editStepSlice.reducer;
