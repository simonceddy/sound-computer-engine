import EventEmiiter from 'events';

const audioContext = new AudioContext();
audioContext.addEventListener('play', () => {
  console.log('playing');
});

const kernel = new EventEmiiter();
kernel.on('play', () => console.log('play'));
console.log(kernel.eventNames());

kernel.audioContext = audioContext;

export default kernel;
