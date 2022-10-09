import { useSelector } from 'react-redux';

function Mixer() {
  const { tracks } = useSelector((state) => state.project);
  console.log(tracks);
  return (
    <div>
      {}
    </div>
  );
}

export default Mixer;
