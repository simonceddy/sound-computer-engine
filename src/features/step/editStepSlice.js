import { createSlice } from '@reduxjs/toolkit';

export const editStepSlice = createSlice({
  name: 'editStepSlice',
  initialState: {
    selectedStep: 0
  },
  reducers: {
    setSelectedStep: (state, action) => {
      state.selectedStep = action.payload;
    }
  },
});

export const { setSelectedStep } = editStepSlice.actions;

export default editStepSlice.reducer;
