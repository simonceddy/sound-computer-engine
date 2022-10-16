export { default as SampleEngine } from './SampleEngine';
export { default as OscillatorEngine } from './OscillatorEngine';

export const engines = {
  SAMPLE_ENGINE: 0,
  OSCILLATOR_ENGINE: 1,
  MOD_ENGINE: 2,
  MIDI_ENGINE: 3,
};

export const engineKeys = Object.keys(engines);
