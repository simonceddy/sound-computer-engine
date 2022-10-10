// import { displayModes, setDisplayMode } from '../kernel/kernelSlice';
import DownButton from './DownButton';
import EditModeButton from './EditModeButton';
import LeftButton from './LeftButton';
import MixerButton from './MixerButton';
import PadModeButton from './PadModeButton';
import PlayButton from './PlayButton';
import ProjectButton from './ProjectButton';
import ResetSeqButton from './ResetSeqButton';
import RightButton from './RightButton';
import UpButton from './UpButton';

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
    id: 'up-button',
    Component: UpButton,
  },
  {},
  {
    id: 'left-button',
    Component: LeftButton,
  },
  {
    id: 'down-button',
    Component: DownButton,
  },
  {
    id: 'right-button',
    Component: RightButton,
  },
  {
    id: 'play-button',
    Component: PlayButton
  },
  {
    id: 'restart-button',
    Component: ResetSeqButton
  }
];

export default ctrlsList;
