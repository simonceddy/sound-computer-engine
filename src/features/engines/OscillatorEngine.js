import { useSelector } from 'react-redux';
import DisplayRow from '../../components/Display/DisplayRow';
import { useAudioContext } from '../../hooks';
import EnevelopeGenerator from '../track/EnevelopeGenerator';

function OscillatorEngine({ track }) {
  const { darkMode } = useSelector((state) => state.display);
  const ctx = useAudioContext();
  const osc = ctx.createOscillator();
  // osc.start();
  // osc.stop();
  const vca = ctx.createGain();
  // console.log(vca);
  osc.connect(vca);
  vca.connect(ctx.destination);
  // console.log(track);
  return (
    <div>
      <DisplayRow darkMode={darkMode}>
        Oscillator
      </DisplayRow>
      {track.name}
      <div className="flex flex-row justify-start items-start">
        <EnevelopeGenerator darkMode={darkMode} audioContext={ctx} vca={vca} />
      </div>
    </div>
  );
}

export default OscillatorEngine;
