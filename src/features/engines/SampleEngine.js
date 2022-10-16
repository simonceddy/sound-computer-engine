import DisplayRow from '../../components/Display/DisplayRow';

function SampleEngine({ track }) {
  return (
    <div>
      <DisplayRow>
        Sample
      </DisplayRow>
      {track.name}
    </div>
  );
}

export default SampleEngine;
