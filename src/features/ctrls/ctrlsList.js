import { toggleDarkMode } from '../display/displaySlice';
import { displayModes, setDisplayMode } from '../kernel/kernelSlice';
import { resetSteps } from '../sequencer/sequencerSlice';
import EditModeButton from './EditModeButton';
import PerfModeButton from './PerfModeButton';
import PlayButton from './PlayButton';
import ProjectButton from './ProjectButton';

const ctrlsList = [
  {
    id: 'first',
    Component: EditModeButton
  },
  {
    id: 'second',
    Component: PerfModeButton
  },
  {
    fnLabel: 'DARK',
    id: 'third',
    action: () => {},
    fnAction: (dispatch) => {
      console.log('toggle dark mode');
      dispatch(toggleDarkMode());
    }
  },
  {
    id: 'show-project',
    Component: ProjectButton
  },
  {
    fnLabel: 'load',
    content: '↑',
    fnAction: (dispatch) => {
      dispatch(setDisplayMode(displayModes.LOADPROJ));
    }
  },
  {},
  {
    content: '←'
  },
  {
    content: '↓'
  },
  {
    content: '→'
  },
  {
    id: 'play-button',
    Component: PlayButton
  },
  {
    id: 'restart-button',
    action: (dispatch) => dispatch(resetSteps())
  }
];

export default ctrlsList;
