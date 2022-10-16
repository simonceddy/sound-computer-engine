import DisplayRow from '../../components/Display/DisplayRow';

function MasterChannel({ children }) {
  return (
    <div>
      <DisplayRow>
        Master Channel
      </DisplayRow>
      {children}
    </div>
  );
}

export default MasterChannel;
