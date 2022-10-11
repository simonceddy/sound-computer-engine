import { useSelectedTrack } from '../../hooks';

function Tuning() {
  const track = useSelectedTrack();
  console.log(track);
  return (
    <div>
      {}
    </div>
  );
}

export default Tuning;
