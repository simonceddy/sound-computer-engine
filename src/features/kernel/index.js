import EventEmiiter from 'events';

const audioContext = new AudioContext();
audioContext.addEventListener('play', () => {
  console.log('playing');
});

const kernel = new EventEmiiter();

kernel.audioContext = audioContext;

export default kernel;
