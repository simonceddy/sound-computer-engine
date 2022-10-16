/* eslint-disable react/function-component-definition */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { engineKeys, engines } from '.';
import { useSelectedTrack } from '../../hooks';
import { updateTrack } from '../project/projectSlice';
import OscillatorEngine from './OscillatorEngine';
import SampleEngine from './SampleEngine';

function getEngineComponent(engineType) {
  // console.log(engineType);
  if (engineKeys[engineType]) {
    switch (engineType) {
      case engines.OSCILLATOR_ENGINE:
        console.log('osc engine');
        return ({ track }) => <OscillatorEngine track={track} />;
      case engines.SAMPLE_ENGINE:
        return ({ track }) => <SampleEngine track={track} />;
      default:
    }
  }
  return () => <div />;
}

function EditEngine() {
  const track = useSelectedTrack();
  const dispatch = useDispatch();
  const EngineComponent = getEngineComponent(track.engine);
  console.log('here');
  useEffect(() => {
    let init = false;
    if (!init && !track.engineSettings) {
      dispatch(updateTrack({
        id: track.id,
        data: {
          engineSettings: {}
        }
      }));
    }
    return () => {
      init = true;
    };
  });
  return (
    <div>
      <EngineComponent track={track} />
    </div>
  );
}

export default EditEngine;
