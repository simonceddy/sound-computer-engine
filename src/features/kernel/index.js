import EventEmiiter from 'events';

const kernel = new EventEmiiter();
kernel.on('play', () => console.log('play'));
console.log(kernel.eventNames());

export default kernel;
