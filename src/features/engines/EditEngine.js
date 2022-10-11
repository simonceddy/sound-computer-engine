/* eslint-disable react/function-component-definition */
import { engines } from '.';
import { useSelectedTrack } from '../../hooks';
import OscillatorEngine from './OscillatorEngine';
import SampleEngine from './SampleEngine';

function getEngineComponent(engineType) {
  let Comp = <div />;
  if (engines[engineType]) {
    switch (engineType) {
      case engines.OSCILLATOR_ENGINE:
        Comp = <OscillatorEngine />;
        break;
      case engines.SAMPLE_ENGINE:
        Comp = <SampleEngine />;
        break;
      default:
    }
  }
  return () => Comp;
}

function EditEngine() {
  const track = useSelectedTrack();

  const EngineComponent = getEngineComponent(track.engine);
  return (
    <div>
      <EngineComponent />
    </div>
  );
}

export default EditEngine;
