import './SequencerStepButton.css';
import CircleButton from '../Ctrl/CircleButton';

function SequencerStepButton({
  onClick,
  currentStep,
  toggled = false
}) {
  return (
    <CircleButton
      className={`seq-step-button ${currentStep ? 'seq-current-step' : ''} ${toggled ? 'seq-step-active' : ''}`}
      onClick={onClick}
    />
  );
}

export default SequencerStepButton;
