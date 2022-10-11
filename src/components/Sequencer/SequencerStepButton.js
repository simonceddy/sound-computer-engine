import './SequencerStepButton.css';
import CircleButton from '../Ctrl/CircleButton';

function SequencerStepButton({
  onClick,
  currentStep,
  toggled = false,
  selectedStep
}) {
  return (
    <CircleButton
      className={`seq-step-button ${currentStep ? 'seq-current-step' : ''} ${toggled ? 'seq-step-active' : ''} ${selectedStep ? 'seq-selected-step' : ''}`}
      onClick={onClick}
    />
  );
}

export default SequencerStepButton;
