import './SequencerContainer.css';

function SequencerContainer({ children }) {
  return (
    <div className="flex flex-row justify-around items-center sequencer-container">
      {children}
    </div>
  );
}

export default SequencerContainer;
