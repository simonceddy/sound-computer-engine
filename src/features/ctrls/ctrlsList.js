import { displayModes, setDisplayMode } from '../kernel/kernelSlice';
import { resetSteps } from '../sequencer/sequencerSlice';
import EditModeButton from './EditModeButton';
import MixerButton from './MixerButton';
import PadModeButton from './PadModeButton';
import PlayButton from './PlayButton';
import ProjectButton from './ProjectButton';

const ctrlsList = [
  {
    id: 'first',
    Component: EditModeButton
  },
  {
    id: 'second',
    Component: PadModeButton
  },
  {
    id: 'mixer-button',
    Component: MixerButton
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
