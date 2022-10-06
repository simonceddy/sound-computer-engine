import { createSlice } from '@reduxjs/toolkit';

export const loadProjectSlice = createSlice({
  name: 'loadProject',
  initialState: {
    selectedProject: 0
  },
  reducers: {
    setSelectedProject: (state, action) => {
      state.selectedProject = action.payload;
    }
  },
});

export const { setSelectedProject } = loadProjectSlice.actions;

export default loadProjectSlice.reducer;
